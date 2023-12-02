let getPoll = new XMLHttpRequest();
let postPoll = new XMLHttpRequest();
let answerTitle = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');

getPoll.addEventListener('readystatechange', () => {
  if(getPoll.readyState === getPoll.DONE) {
    let dataPoll = JSON.parse(getPoll.responseText);
    answerTitle.innerText = dataPoll.data.title;
    dataPoll.data.answers.forEach(element => {
      let button = document.createElement('button');
      button.classList.add('poll__answer');
      button.innerText = element;
      answers.appendChild(button);
    });
    let answer = document.getElementsByClassName('poll__answer');
    
    for (let i=0; i < answer.length; i++) {
      answer[i].addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
        postPoll.addEventListener('readystatechange', () => {
          if(postPoll.readyState === postPoll.DONE) {
            let result = JSON.parse(postPoll.responseText);
            let totalVotes = 0;
            result.stat.forEach((e) => {totalVotes += e.votes;})
            result.stat.forEach((e) => {
              answers.innerText += `${e.answer}: ${Math.round(parseInt(e.votes)/parseInt(totalVotes)*100)}%
              
              `
            });
          };
        });
        postPoll.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        postPoll.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        postPoll.send( `vote=${dataPoll.id}&answer=${i}`);
        while(answer.length) {
          answer[0].parentNode.removeChild(answer[0]);
        };
      });
    };
  };
});

getPoll.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
getPoll.send();

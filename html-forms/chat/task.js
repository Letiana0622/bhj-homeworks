if (typeof document !== 'undefined') {

    const chatWidget = document.querySelector('.chat-widget');
    let chatMessages = document.querySelector('.chat-widget__messages');
    let chatInput = document.querySelector('.chat-widget__input');

    chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
    }
    );

    document.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        let data = new Date();
        let hour = data.getHours();
        let minute = data.getMinutes();
        let list = [
                'Я помню чудное мгновенье',
                'Передо мной явилась ты',
                'Как мимолетное виденье',
                'Как гений чистой красоты',
                'В томленьях грусти безнадежной',
                'В тревогах шумной суеты',
                'Звучал мне долго голос нежный',
                'И снились милые черты',
        ];
        let randomAnswer = list[Math.floor(Math.random() * list.length)];
        let input = chatInput.value.trim();
        if (input) {
        chatMessages.innerHTML += 
            `<div class="message message_client"> 
            <div class="message__time">${hour}:${minute}</div> 
            <div class="message__text">${input}</div> 
            </div>
            <div class="message message"> 
            <div class="message__time">${hour}:${minute}</div> 
            <div class="message__text">${randomAnswer}</div> 
            </div>`
        document.getElementById('chat-widget__input').value = '';
        };
    };
    });
    
};

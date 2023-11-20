function interestChecked (event) {

let interestsList = event.target.closest('.interest');
let related = Array.from(interestsList.querySelectorAll('.interest__check'));

if (!event.target.checked === true) {
   
    related.forEach((item) => {item.checked = false});
}
else {
    related.forEach((item) => {item.checked = true});
}

};

interests.forEach((interest) => {interest.addEventListener('click', interestChecked)});

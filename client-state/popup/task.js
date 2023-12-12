function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function showSubscribePopup() {
  let match = getCookie('popup');
  if(match) {}
  else {
    subscribePopup.classList.add('modal_active');
  };
};

function closeSubscribePopup() {
    subscribePopup.classList.remove('modal_active');
    document.cookie = 'popup=closed';
};

const subscribePopup  = document.getElementById('subscribe-modal');
const subscribeClose = document.querySelector('.modal__close_times');
document.addEventListener("DOMContentLoaded", showSubscribePopup);
subscribeClose.addEventListener('click', closeSubscribePopup);

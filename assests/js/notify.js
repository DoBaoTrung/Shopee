const subnavNotify = document.querySelector('.header__subnav-notify');
const notifyButton = document.querySelector('.header__navbar-notify .header__navbar-item:nth-of-type(1)');

function hideSubnavNotify() {
    subnavNotify.style.animation = 'notifyFadeOut ease 0.3s forwards';
    subnavNotify.addEventListener('animationend', function() {
        subnavNotify.style.display = 'none';
    }, {once: true});
}

function showSubnavNotify() {
    subnavNotify.style.display = 'block';
    subnavNotify.style.animation = 'notifyFadeIn ease 0.2s forwards';
}

notifyButton.addEventListener('mouseleave', hideSubnavNotify);
notifyButton.addEventListener('mouseover', showSubnavNotify);
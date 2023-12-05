const modalClose = document.querySelector('.js-modal-close');
const modal = document.querySelector('.js-modal');
const loginBtn = document.querySelector('.js-login');
const modalBody = document.querySelector('.js-modal-body');

function showModal() {
    modal.style.display = 'flex';
    modalBody.style.animation = 'loginFormFadeIn ease 0.3s';
}

function hideModal() {
    modalBody.style.animation = 'loginFormFadeOut ease 0.3s';
    modalBody.addEventListener('animationend', function() {
        modal.style.display = 'none';
        modalBody.style.animation = '';
    }, {once: true});
}

modalClose.addEventListener('click', hideModal)

loginBtn.addEventListener('click', showModal);

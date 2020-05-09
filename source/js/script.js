var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn');
var navBtnClose = document.querySelector('.main-nav__btn--close');

navMain.classList.remove('main-nav--nojs');

navBtn.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});

navBtnClose.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--opened')) {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
    }
});
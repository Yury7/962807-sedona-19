var navMain = document.querySelector('.main-nav');
var navBtn = document.querySelector('.main-nav__btn');
var navActiveItem = document.querySelector('.site-list__item--active');


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

navActiveItem.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});

function modalInit() {
  var form = document.querySelector(".js-form");
  var formButton = document.querySelector(".js-form-button");
  var modalSuccess = document.querySelector(".js-modal-success");
  var modalError = document.querySelector(".js-modal-error");
  var modalShow = "modal--show";
  var closeSuccess = document.querySelector(".js-close-success");
  var closeError = document.querySelector(".js-close-error");
  var phoneField = form.querySelector("[name=phone]");
  var emailField = form.querySelector("[name=email]");

  formButton.addEventListener("click", function(evt) {
    if (!phoneField.value || !emailField.value) {
      modalError.classList.add(modalShow);
    } else {
      evt.preventDefault();
      modalSuccess.classList.add(modalShow);
    }
  });

  closeSuccess.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSuccess.classList.remove(modalShow);
  });

  closeError.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalError.classList.remove(modalShow);
  });

};

modalInit();

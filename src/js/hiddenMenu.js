const hiddenMenu = document.querySelector('.hiddenMenu')
const burgerButton = document.querySelector('.menu__button')
const cross = document.querySelector('.hiddenMenu__btn--burger')



burgerButton.addEventListener('click', function (evt) {
  hiddenMenu.classList.remove('visuallyHiddenMenu')
  hiddenMenu.classList.add('blur')
})
cross.addEventListener('click', function (evt) {
  hiddenMenu.classList.add('visuallyHiddenMenu')
  hiddenMenu.classList.remove('blur')
})


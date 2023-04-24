const hiddenMenu = document.querySelector('.hiddenMenu')
const burgerButton = document.querySelector('.menu__button')
const cross = document.querySelector('.hiddenMenu__btn--burger')
const body = document.querySelector('.body')

burgerButton.addEventListener('click', function (evt) {
  hiddenMenu.classList.remove('visuallyHiddenMenu')
  hiddenMenu.classList.add('blur')
  body.classList.toggle('noScroll')
})
cross.addEventListener('click', function (evt) {
  hiddenMenu.classList.add('visuallyHiddenMenu')
  hiddenMenu.classList.remove('blur')
  body.classList.toggle('noScroll')
})

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hiddenMenu.classList.add('visuallyHiddenMenu')
    hiddenMenu.classList.remove('blur')
    body.classList.add('noScroll')
  }
})

const modalBox = document.querySelector('.hiddenMenu__wrapper')

hiddenMenu.addEventListener('click', (e) => {
  const click = e.composedPath().includes(modalBox)
  if (!click) {
    hiddenMenu.classList.add('visuallyHiddenMenu')
    hiddenMenu.classList.remove('blur')
    body.classList.remove('noScroll')
  }
})
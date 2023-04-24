const phone = document.querySelector('.menu__button--phone')
const popupPhone = document.getElementById('popup__phone')
const exit = document.querySelector('.phone__exit')
const popup = document.querySelector('.popup')
const body = document.querySelector('.body')
const phoneHidden = document.querySelector('.hiddenMenu__btn--phone')
const input = document.querySelector('.phone__input--tel')

phone.addEventListener('click', function (e) {
  e.preventDefault()
  popupPhone.classList.add('open')
  body.classList.add('noScroll')
  input.focus()
})
phoneHidden.addEventListener('click', function (e) {
  popupPhone.classList.add('open')
  body.classList.add('noScroll')
  e.preventDefault()
  input.focus()
})
exit.addEventListener('click', function (e) {
  popupPhone.classList.remove('open')
  body.classList.remove('noScroll')
})

//esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupPhone.classList.remove('open')
    body.classList.remove('noScroll')
  }
})

const modalBox = document.querySelector('.phone')

popupPhone.addEventListener('click', (e) => {
  const click = e.composedPath().includes(modalBox)
  if (!click) {
    popupPhone.classList.remove('open')
    body.classList.remove('noScroll')
  }
})

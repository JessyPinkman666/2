const phone = document.querySelector('.menu__button--phone')
const popupPhone = document.getElementById('popup__phone')
const exit = document.querySelector('.phone__exit')
const popup = document.querySelector('.popup')
const body = document.querySelector('.body')
const phoneHidden = document.querySelector('.hiddenMenu__btn--phone')

phone.addEventListener('click', function (e) {
  popupPhone.classList.add('open')
  body.classList.add('noScroll')
})
phoneHidden.addEventListener('click', function (e) {
  popupPhone.classList.add('open')
  body.classList.add('noScroll')
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

// const phoneBtn = document.querySelector('.menu__item--phone')
// const hiddenPhoneBtn = document.querySelector('.hiddenMenu__item--phone')
// const phonePopup = document.querySelector('.popup .phone')
// const phoneExit = document.querySelector('.phone__exit')
// const body = document.querySelector('.body')

// phoneBtn.addEventListener('click', function (evt) {
//   phonePopup.classList.toggle('visually--hidden')
//   body.classList.toggle('noScroll')
// })
// phoneExit.addEventListener('click', function (evt) {
//   phonePopup.classList.toggle('visually--hidden')
//   body.classList.toggle('noScroll')
// })

// hiddenPhoneBtn.addEventListener('click', function (evt) {
//   phonePopup.classList.toggle('visually--hidden')
//   body.classList.toggle('noScroll')
// })

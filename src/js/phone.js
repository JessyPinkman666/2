const phoneBtn = document.querySelector('.menu__item--phone')
const phonePopup = document.querySelector('.popup__phone')
const phoneExit = document.querySelector('.phone__exit')
const notMobile = window.matchMedia('(min-width: 768px)')

phoneBtn.addEventListener('click', function (evt) {
  phonePopup.classList.toggle('visually--hidden')
})
phoneExit.addEventListener('click', function (evt) {
  phonePopup.classList.toggle('visually--hidden')
})

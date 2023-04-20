const chatBtn = document.querySelector('.menu__item--chat')
const hiddenChatBtn = document.querySelector('.hiddenMenu__item--chat')
const popup = document.querySelector('.popup__message')
const exit = document.querySelector('.feedback__exit')

chatBtn.addEventListener('click', function (evt){
  popup.classList.toggle('visually--hidden')
})
exit.addEventListener('click', function (evt){
  popup.classList.toggle('visually--hidden')
})


hiddenChatBtn.addEventListener('click', function (evt) {
  popup.classList.toggle('visually--hidden')
})
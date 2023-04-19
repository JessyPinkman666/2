const feedbackBtn = document.querySelector('.menu__item--chat')
const hideFeedbackBtn = document.querySelector('.hiddenMenu__item--chat')
const feedbackPopup = document.querySelector('.popup')
const feedbackExit = document.querySelector('.feedback__exit')

feedbackBtn.addEventListener('click', function (evt) {
  feedbackPopup.classList.toggle('visually--hidden')
})
feedbackExit.addEventListener('click', function (evt) {
  feedbackPopup.classList.toggle('visually--hidden')
})

hideFeedbackBtn.addEventListener('click', function (evt) {
  feedbackPopup.classList.toggle('visually--hidden')
})
feedbackExit.addEventListener('click', function (evt) {
  feedbackPopup.classList.toggle('visually--hidden')
})

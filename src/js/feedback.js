const feedback = document.querySelector('.menu__button--chat')
const hiddenFeedback = document.querySelector('.hiddenMenu__btn--chat')
const popupFeedback = document.getElementById('popup__feedback')
const exit = document.querySelector('.feedback__exit')
const popup = document.querySelector('.popup')
const body = document.querySelector('.body')

feedback.addEventListener('click', function (e) {
  popupFeedback.classList.add('open')
  body.classList.add('noScroll')
})
hiddenFeedback.addEventListener('click', function (e) {
  popupFeedback.classList.add('open')
  body.classList.add('noScroll')
})
exit.addEventListener('click', function (e) {
  popupFeedback.classList.remove('open')
  body.classList.remove('noScroll')
})

//esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupFeedback.classList.remove('open')
    body.classList.remove('noScroll')
  }
})

const modalBox = document.querySelector('.feedback')

popup.addEventListener('click', (e) => {
  const click = e.composedPath().includes(modalBox)
  if (!click) {
    popupFeedback.classList.remove('open')
    body.classList.remove('noScroll')
  }
})



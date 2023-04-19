const btnMore = document.querySelector('.btn__more')
const btnHide = document.querySelector('.btn__hide')
const hiddenContent = document.querySelector('.mainContent__text')
const screenMedium = window.matchMedia(
  '(min-width: $screen-medium) and (max-width: $screen-large)'
)
const screenLarge = window.matchMedia('(min-width: $screen-large)')

btnMore.addEventListener('click', function (evt) {
  evt.preventDefault()
  btnHide.classList.toggle('visually--hidden')
  btnMore.classList.toggle('visually--hidden')
  hiddenContent.classList.add('auto')
})
btnHide.addEventListener('click', function (evt) {
  evt.preventDefault()
  btnHide.classList.toggle('visually--hidden')
  btnMore.classList.toggle('visually--hidden')
  hiddenContent.classList.remove('auto')
})

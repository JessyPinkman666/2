let btnMore = document.querySelector('.table__deviceButton--more')
let btnHide = document.querySelector('.table__deviceButton--hide')
let brandItems = document.querySelector('.table__list--device').children
let mediumSize = window.matchMedia('(min-width: 767px) and (max-width: 1119px)')
let largeSize = window.matchMedia('(min-width: 1120px)')

function sizeCheker() {
  if (mediumSize) {
    for (let i = 3; i < brandItems.length; i++) {
      brandItems[i].classList.add('visually--hidden')
    }
  } else if (largeSize) {
    for (let i = 4; i < brandItems.length; i++) {
      brandItems[i].classList.add('visually--hidden')
    }
  }
}

sizeCheker()

btnMore.addEventListener('click', function (evt) {
  if (mediumSize) {
    for (let i = 3; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  } else if (largeSize) {
    for (let i = 4; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  }

  btnMore.classList.toggle('visually--hidden')
  btnHide.classList.toggle('visually--hidden')
})

btnHide.addEventListener('click', function (evt) {
  if (mediumSize) {
    for (let i = 3; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  } else if (largeSize) {
    for (let i = 4; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  }

  btnHide.classList.toggle('visually--hidden')
  btnMore.classList.toggle('visually--hidden')
})

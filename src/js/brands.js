let btnMore = document.querySelector('.table__brandButton--more')
let btnHide = document.querySelector('.table__brandButton--hide')
let brandItems = document.querySelector('.table__list').children
let mediumSize = window.matchMedia('(min-width: 768px) and (max-width: 1119px)')
let largeSize = window.matchMedia('(min-width: 1120px)')

let sizeCheker = function () {
  if (mediumSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.add('visually--hidden')
    }
  } else if (largeSize) {
    for (let i = 8; i < brandItems.length; i++) {
      brandItems[i].classList.add('visually--hidden')
    }
  }
}

sizeCheker()

btnMore.addEventListener('click', function (evt) {
  if (mediumSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  } else if (largeSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  }

  btnMore.classList.toggle('visually--hidden')
  btnHide.classList.toggle('visually--hidden')
})

btnHide.addEventListener('click', function (evt) {
  if (mediumSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  } else if (largeSize) {
    for (let i = 6; i < brandItems.length; i++) {
      brandItems[i].classList.toggle('visually--hidden')
    }
  }

  btnHide.classList.toggle('visually--hidden')
  btnMore.classList.toggle('visually--hidden')
})

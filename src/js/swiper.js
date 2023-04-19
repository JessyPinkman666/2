// import Swiper JS
import Swiper, { Pagination } from 'swiper'

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  direction: 'horizontal',

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  slidesPerView: 'auto'
})

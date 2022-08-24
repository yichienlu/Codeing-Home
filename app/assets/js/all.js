var shareSwiper = new Swiper('.shareSwiper', {
  effect: "fade",
  loop: true,

  // 分頁   
  pagination: {
    el: '.share-swiper-pagination',
    clickable: true,
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.share-swiper-button-next',
    prevEl: '.share-swiper-button-prev',
  },
  // 滾動條
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
var coursesSwiper = new Swiper(".coursesSwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true,
  loop: true,
});
var categoriesSwiper = new Swiper(".categoriesSwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  freeMode: true,
  loop: true,
});
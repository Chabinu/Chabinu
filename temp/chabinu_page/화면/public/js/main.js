
// 헤더 토글
// navbar JS
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener("click", function(){
  menu.classList.toggle("active");
});




// 사진 슬라이드
// Swiper JS
new Swiper('.swiper1', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

new Swiper('.swiper2', {
  // Optional parameters
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

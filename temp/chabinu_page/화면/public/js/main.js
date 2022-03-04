
// 헤더 토글
// navbar JS
const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener("click", function(){
  menu.classList.toggle("active");
});




// 사진 슬라이드
// Swiper JS
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type : 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

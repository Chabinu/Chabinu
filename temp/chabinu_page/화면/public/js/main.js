

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener("click", function(){
  menu.classList.toggle("active");
});
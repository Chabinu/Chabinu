

// 메뉴 버튼 눌렀을 경우 사이드 메뉴 출력
document.querySelector('.menuIcon').addEventListener("click",function(){

  const sideHeader = document.querySelector('.sidebarHeader');
  const sideBody = document.querySelector('.sidebarBody');
  
  sideHeader.classList.add('sideHeaderOpen');
  sideBody.classList.add('sideBodyOpen');

});


// 닫기 버튼 클릭 시 사이드 메뉴 제거
document.querySelector('.menuCloseBtn').addEventListener("click",function(){

  const sideHeader = document.querySelector('.sidebarHeader');
  const sideBody = document.querySelector('.sidebarBody');
  
  sideHeader.classList.remove('sideHeaderOpen');
  sideBody.classList.remove('sideBodyOpen');

});





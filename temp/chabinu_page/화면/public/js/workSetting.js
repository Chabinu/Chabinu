
// 자동차 리스트 저장 배열
carList = [];

// 자동차 객체
car = {
  'carNo' : carNo,
  'cleaning' : cleaning,
  'sanitize' : sanitize,
  'polishing' : polishing
};



// findCar - ajax로 차량번호 조회해서 미리보기 생성하기




// -------------------- 작업 차량 추가 --------------------

// addCar - form에 있는 데이터로 하단에 목록 생성하기
function addCar(){

  // 차량 번호
  const carNo = document.getElementById('carNo').value;
  // 세차 옵션 값
  const cleaning = $('input[name="cleaning"]:checked').next().text();
  // 소독 옵션 값
  const sanitize = $('input[name="sanitize"]:checked').next().text();
  // 광택 옵션 값
  const polishing = $('input[name="polishing"]:checked').next().text();

  // 리스트가 추가될 공간
  const carListArea = $('.addCarList');

  // console.log('차량번호 : ' + carNo);
  // console.log('세차 옵션 : ' + cleaning);
  // console.log('소독 옵션 : ' + sanitize);
  // console.log('광택 옵션 : ' + polishing);

  // 차량번호 입력을 하지 않는 경우
  if(carNo.trim().length == 0){
    alert('차량번호를 입력해주세요.');
    // 리스트 추가 수행 안함
  }else{

    // 차량번호 입력창 초기화
    $('#carNo').val('');

    // 
    const card = $('<div class="car-item d-flex flex-row">');
    const wrapper = $('<div class="col-8">')
    const card_carNo = $('<div>'); 
    const card_cleaning = $('<div>'); 
    const card_sanitize = $('<div>'); 
    const card_poliching = $('<div>'); 

    const btnWrap = $('<div class="col-4 d-flex flex-column justify-content-center">');
    const updateBtn = $('<button class="carBtn btn-success">');
    const deleteBtn = $('<button class="carBtn btn-danger" onclick="deleteCar(event);">');


    // 내용
    card_carNo.text('차량번호 : ' + carNo);
    card_cleaning.text('세차 : ' + cleaning);
    card_sanitize.text('소독 : ' + sanitize);
    card_poliching.text('광택 : ' + polishing);

    // 버튼
    updateBtn.text('수정');
    deleteBtn.text('제거');

    btnWrap.append(updateBtn);
    btnWrap.append(deleteBtn);

    wrapper.append(card_carNo);
    wrapper.append(card_cleaning);
    wrapper.append(card_sanitize);
    wrapper.append(card_poliching);

    card.append(wrapper);
    card.append(btnWrap);

    $('.addCarList').prepend(card);

  }

};



// -------------------- 작업 차량 정보 수정 --------------------




// -------------------- 작업 차량 정보 제거 --------------------
function deleteCar(e){

  console.log(e.target);
  const car = e.target;

  console.log(car.parentElement.parentElement);

  car.parentElement.parentElement.remove();

};



// 작업 시작
function startCleaning(){

  if(confirm('시작버튼을 누른 후에는 수정 및 제거가 불가능합니다.')){
    
    location.href = 'carList.html';

  }


};



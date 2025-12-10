// 함수선언

// function greeting() {
//   console.log('안녕하세요');
// }

//  함수호출
// greeting();

// 매개변수
function getArea(width, height) {
  // 중첩함수 - 함수안에 함수
  function another() {
    console.log('중접함수');
  }
  another();
  let area = width * height;

  //반환값 - return 줄에서 반환 후 종료됨, 이하 줄에선 실행되지 않는다.
  return area;
}

// 인수
let area1 = getArea(10, 400);

console.log(area1);

// 호이스팅 - 함수선언이 위에 있어도 호출이 가능

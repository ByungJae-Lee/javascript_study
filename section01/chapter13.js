// 1. 콜백함수 - 함수의 인수안에 함수를 넣어 실행 시키는 것
function main(value) {
  value();
}

function sub() {
  console.log('i am sub');
}
main(sub);

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
repeat(5, function (idx) {
  console.log(idx);
});
// 화살표함수로 간결하게
repeat(5, (idx) => {
  console.log(idx);
});

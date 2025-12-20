// 동기 비동기
// 동기의 문제점을 비동기로 해결함
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);

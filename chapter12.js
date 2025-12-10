// 1. 함수 표현식 - 값으로서 함수를 넣는 것, 호이스팅 안됨
let varB = function () {
  console.log('funcB');
};
varB();

// 2. 화살표 함수
let varC = (value) => {
  return value + 1;
};
console.log(varC(10));

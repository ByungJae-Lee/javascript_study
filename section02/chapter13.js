// Promise

// const promise = new Promise((resolve, reject) => {
//   // 비동기 작업 실행하는 함수를 executer 라고 부른다
//   // 인수로는 resolve <- 성공시, reject <- 실패시, 가 주어진다
//   setTimeout(() => {
//     console.log('안녕');
//     // resolve('halo'); // PromiseResult 값을 채워주려면 resolve 안에 값을 넣어야 함
//     reject('Why 실패했냐료...ㅠㅠ');
//   }, 2000);
// });

// console.log(promise);
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject('num이 숫자가 아닙니다');
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// than 매서드: 성공 시 콜백되는 것
// catch: 실패 시 콜백되는 것, then에 이어서 작성이 가능함
// promise.catch((error) => {
//   console.log(error);
// });

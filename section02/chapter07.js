// 6가지의 요소 조작 메서드

// 1. push, 배열 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// 2. pop, 배열 맨 뒤 요소를 제거하고 반환함
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// 3. shift, 배열 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

// 4. unshift, 배열 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4);

// 5. slice, 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // (시작인덱스, 자를 범위인덱스 -1 해줘야함)
let sliced2 = arr5.slice(2); // 끝까지 그냥 할거면 시작값만 입력해도 자동으로 시작 ~ 끝까지 반환
let sliced3 = arr5.slice(-3); // 뒤에서 부터 자를려면 -를 활용한다

// 6. concat, 두개의 서로 다른 배열을 이어 붙여 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);

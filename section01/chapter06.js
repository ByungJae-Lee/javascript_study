//형변환의 두 종류
// 1. 묵시적 형 변환
// -> JS엔진에서 자동으로 형 변환 하는 것

let num = 10;
let str = '20';

const result = num + str;

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용하여 직접 형 변환을 명시함
// -> 문자열 -> 숫자
let str1 = '10';
let strToNum1 = Number(str1);

let str2 = '10개';
let strToNum2 = parseInt(str2);

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + '입니다');

// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환

let arr1 = [
  { name: '이병재', hobby: '러닝' },
  { name: '신광호', hobby: '경보' },
  { name: '명호성', hobby: '영화감상' },
];

const tennisPeople = arr1.filter((item) => item.hobby === '테니스');

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드, 숫자는 해당이 안된, 숫자로 할시 비교기준을 세워줘야함
let arr3 = [12, 3, 1];

// 내림차순 하는방법, 오름차순은 반대로 하면 됨
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ['a', 'b', 'c'];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐 반환하는 메서드
let arr6 = ['hi', 'im', '병재'];
const joined = arr6.join(' ');
console.log(joined);

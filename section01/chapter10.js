// for (초기식; 조건식; 증감식) {
//   console.log("반복")
// }

for (let idx = 0; idx <= 10; idx++) {
  // 특정 조건충족 시 넘어가게 하려면 continue활용
  if (idx % 2 === 0) {
    continue;
  }

  console.log(idx);

  // 중간에 종료하고 싶다면 조건식과 break를 넣는다.
  if (idx >= 5) {
    break;
  }
}

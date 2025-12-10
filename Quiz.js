let temperature = 20;

if (temperature < 0) {
  console.log('매우 추움');
} else if (0 <= temperature && temperature < 10) {
  console.log('추움');
} else if (10 <= temperature && temperature < 20) {
  console.log('적당');
} else {
  console.log('더움');
}

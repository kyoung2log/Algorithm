// 값을 정수로 변환
const solution1 = (num1, num2) => parseInt(num1 / num2);

// 내림
const solution2 = (num1, num2) => Math.floor(num1 / num2);

// 소수 부분 버림
const solution3 = (num1, num2) => Math.trunc(num1 / num2);

const a = 7;
const b = 3;

console.log(solution1(a, b));
console.log(solution2(a, b));
console.log(solution3(a, b));

function solution1(numbers) {
  return numbers.map((item) => item * 2);
}

function solution2(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

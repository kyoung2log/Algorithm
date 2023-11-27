function solution(numbers) {
  const len = numbers.length;
  const sum = numbers.reduce((pre, cur) => pre + cur, 0);

  return sum / len;
}

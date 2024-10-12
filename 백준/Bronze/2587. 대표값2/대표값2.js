const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((it) => Number(it));

const sum = input.sort((a, b) => a - b).reduce((pre, cur) => pre + cur);

console.log(sum / input.length);
console.log(input[Math.floor(input.length / 2)]);

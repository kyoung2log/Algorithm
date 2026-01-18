const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
console.log(m - n);

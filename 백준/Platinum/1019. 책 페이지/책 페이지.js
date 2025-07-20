const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let n = +fs.readFileSync(path).toString().trim();
const numbers = Array(10).fill(0);
let digit = 1;
let add = 0;

while (n > 0) {
  const 나머지 = n % 10;
  n = Math.floor(n / 10);

  for (let i = 0; i <= 9; i++) {
    if (i < 나머지) numbers[i] += (n + 1) * digit;
    else if (i === 나머지) numbers[i] += n * digit + add + 1;
    else numbers[i] += n * digit;
  }

  add += 나머지 * digit;
  numbers[0] -= digit;
  digit *= 10;
}

console.log(...numbers);

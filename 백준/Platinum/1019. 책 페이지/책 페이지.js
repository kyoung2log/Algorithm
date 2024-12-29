const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let n = +fs.readFileSync(path).toString().trim();
const ans = Array(10).fill(0);
let digit = 1;
let add = 0;

while (n !== 0) {
  const cur = n % 10;
  n = Math.floor(n / 10);

  for (let i = 0; i < cur; i++) {
    ans[i] += (n + 1) * digit;
  }

  ans[0] -= digit;
  ans[cur] += n * digit + add + 1;

  for (let i = cur + 1; i < 10; i++) {
    ans[i] += n * digit;
  }

  add += cur * digit;
  digit *= 10;
}
console.log(...ans);

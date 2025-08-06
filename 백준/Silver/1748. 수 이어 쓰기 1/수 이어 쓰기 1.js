const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +fs.readFileSync(path).toString().trim();
let ans = 0;
let digit = 1;

for (let i = 1; i <= n / 10; i *= 10) {
  ans += i * 9 * digit;
  digit += 1;
}
ans += (n - (10 ** (digit - 1) - 1)) * digit;

console.log(ans);

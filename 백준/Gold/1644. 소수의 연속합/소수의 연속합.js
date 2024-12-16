const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = Number(fs.readFileSync(path).toString().trim());
const number = Array(n + 1).fill(false);
const primeNum = [];

for (let i = 2; i <= n; i++) {
  if (number[i]) continue;
  primeNum.push(i);

  for (let j = i; j <= n; j += i) {
    number[j] = true;
  }
}

let left = 0;
let right = 1;
let ans = primeNum.includes(n) ? 1 : 0;

while (left < right && right < primeNum.length) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    sum += primeNum[i];
  }

  if (sum > n) left += 1;
  else if (sum < n) right += 1;
  else {
    ans += 1;
    left += 1;
  }
}

console.log(ans);

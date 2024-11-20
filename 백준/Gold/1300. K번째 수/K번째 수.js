const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split('\n').map(Number);

let left = 1;
let right = k;
let ans = 0;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += Math.min(Math.floor(mid / i), n);
  }

  if (sum < k) left = mid + 1;
  else {
    ans = mid;
    right = mid - 1;
  }
}

console.log(ans);

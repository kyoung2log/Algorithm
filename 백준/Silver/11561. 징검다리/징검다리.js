const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [_, ...inputs] = fs.readFileSync(path).toString().trim().split('\n').map(Number);

for (const n of inputs) {
  let left = 1;
  let right = Math.floor(Math.sqrt(2 * n)) + 1;
  let ans = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = (mid * (mid + 1)) / 2;

    if (sum <= n) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(ans);
}

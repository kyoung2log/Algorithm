const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const n = +inputs[0];
const score = inputs[1].split(' ').map(Number);

const [p, q, r, S] = inputs[2].split(' ').map(Number);

let start = 1;
let end = 100001;
let ans = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (score[i] > mid + r) sum += score[i] - p;
    else if (score[i] < mid) sum += score[i] + q;
    else sum += score[i];
  }

  if (sum < S) {
    start = mid + 1;
  } else {
    ans = mid;
    end = mid - 1;
  }
}

console.log(ans === 0 ? -1 : ans);

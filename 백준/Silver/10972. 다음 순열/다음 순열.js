const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];
const P = inputs[1].split(' ').map(Number);
let ans = [-1];

for (let i = n - 1; i > 0; i--) {
  if (P[i - 1] >= P[i]) continue;

  // i-1보다 큰 값 중 가장 작은 값 찾기
  let minVal = Infinity;
  let minIdx = -1;
  for (let j = i; j < n; j++) {
    if (P[j] > P[i - 1] && P[j] < minVal) {
      minVal = P[j];
      minIdx = j;
    }
  }

  [P[i - 1], P[minIdx]] = [P[minIdx], P[i - 1]];
  const leftP = P.slice(0, i);
  const rightP = P.slice(i).sort((a, b) => a - b);

  ans = [...leftP, ...rightP];
  break;
}

console.log(...ans);

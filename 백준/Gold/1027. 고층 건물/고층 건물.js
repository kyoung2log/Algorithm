const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const n = +input[0];
const h = input[1].split(' ').map(Number);

let ans = 0;

for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < n; j++) {
    if (i === j) continue;
    let visible = true;
    for (let k = Math.min(i, j) + 1; k < Math.max(i, j); k++) {
      // i와 j를 잇는 직선 위의 높이
      const heightOnLine = h[i] + (h[j] - h[i]) * (k - i) / (j - i);
      if (h[k] >= heightOnLine - 1e-12) { // 오차 보정
        visible = false;
        break;
      }
    }
    if (visible) cnt++;
  }
  ans = Math.max(ans, cnt);
}

console.log(ans);

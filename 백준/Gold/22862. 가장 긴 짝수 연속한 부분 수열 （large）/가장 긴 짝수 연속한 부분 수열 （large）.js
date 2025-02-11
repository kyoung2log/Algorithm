const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const [n, k] = inputs[0].split(' ').map(Number);
const S = inputs[1].split(' ').map(Number);

let maxLen = 0;
let len = 0;

let left = 0;
let right = 0;
let removeCnt = k;

while (right < n) {
  // 다음 탐색수가 짝수일 경우
  if (S[right] % 2 === 0) {
    right += 1;
    len += 1;

    if (maxLen < len) maxLen = len;

    continue;
  }

  // 홀수인데 제거 가능 횟수가 남아있다면
  if (removeCnt > 0) {
    right += 1;
    removeCnt -= 1;
  } else {
    // 홀수인애를 만날때까지
    while (S[left] % 2 === 0) {
      left += 1;
      len -= 1;
    }

    left += 1;
    removeCnt += 1;
  }
}
console.log(maxLen);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [a, b] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
const q = [[a, 1]];

let front = 0;
let ans = -1;
while (front < q.length) {
  const [target, cnt] = q[front++];

  if (target === b) {
    ans = cnt;
    break;
  }

  if (target > b) continue;

  q.push([Number(target + '1'), cnt + 1]);
  q.push([target * 2, cnt + 1]);
}

console.log(ans);

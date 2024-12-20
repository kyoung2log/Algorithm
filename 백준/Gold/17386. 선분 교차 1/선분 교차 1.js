const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const [x1, y1, x2, y2] = a;
const [x3, y3, x4, y4] = b;

const CCW = (a, b, c) => {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const [x3, y3] = c;

  const v1 = [x2 - x1, y2 - y1];
  const v2 = [x3 - x1, y3 - y1];

  const product = v1[0] * v2[1] - v1[1] * v2[0];

  if (product > 0) return 1;
  if (product < 0) return -1;
  return 0;
};

let isCross = 0;

if (CCW([x1, y1], [x2, y2], [x3, y3]) + CCW([x1, y1], [x2, y2], [x4, y4]) === 0) {
  if (CCW([x3, y3], [x4, y4], [x1, y1]) + CCW([x3, y3], [x4, y4], [x2, y2]) === 0) {
    isCross = 1;
  }
}

console.log(isCross);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[_], ...dots] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

dots.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

for (const [x, y] of dots) {
  console.log(x, y);
}

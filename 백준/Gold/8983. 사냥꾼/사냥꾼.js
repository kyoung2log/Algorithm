const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[m, n, l], place, ...animals] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
let ans = 0;

for (const [x, y] of animals) {
  if (y > l) continue;

  for (let i = 0; i <= l - y; i++) {
    if (place.includes(x + i) || place.includes(x - i)) {
      ans += 1;
      break;
    }
  }
}

console.log(ans);

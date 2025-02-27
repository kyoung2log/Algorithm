const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [x, y, c] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

let left = 1;
let right = Math.min(x, y);
let ans = 0;

while (right - left > 0.001) {
  const w = (left + right) / 2;
  const h1 = Math.sqrt(x ** 2 - w ** 2);
  const h2 = Math.sqrt(y ** 2 - w ** 2);
  const currentC = (h1 * h2) / (h1 + h2);

  if (currentC < c) right = w;
  else {
    left = w;
    ans = w;
  }
}

console.log(ans.toFixed(3));

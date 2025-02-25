const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, k] = inputs.shift().split(' ').map(Number);
const drinks = inputs.map(Number);

let left = 1;
let right = Math.max(...drinks);
let ans = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let kCnt = 0;

  for (const drink of drinks) {
    kCnt += Math.floor(drink / mid);
  }

  if (kCnt < k) right = mid - 1;
  else {
    left = mid + 1;
    ans = mid;
  }
}

console.log(ans);

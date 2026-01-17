const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const n = inputs.shift();
let max = -Infinity;
let min = Infinity;
let sum = 0;
const array = [];
const cnt = new Map();

for (const input of inputs) {
  max = Math.max(max, input);
  min = Math.min(min, input);
  sum += input;
  array.push(input);

  if (cnt.has(input)) cnt.set(input, cnt.get(input) + 1);
  else cnt.set(input, 1);
}
const center = array.sort((a, b) => a - b)[Math.floor(n / 2)];

let maxCnt = 0;
let maxVal = [];
for (const [key, value] of cnt) {
  if (maxCnt < value) {
    maxCnt = value;
    maxVal = [key];
  } else if (maxCnt === value) {
    maxVal.push(key);
  }
}

maxVal = maxVal.sort((a, b) => a - b);
console.log(Math.round(sum / n) === -0 ? 0 : Math.round(sum / n));
console.log(center);
console.log(maxVal.length > 1 ? maxVal[1] : maxVal[0]);
console.log(max - min);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];
const numbers = inputs[1].split(' ').map(Number);
const op = inputs[2].split(' ').map(Number);
let max = -Infinity;
let min = Infinity;

const calculate = (a, b, op) => {
  switch (op) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return Math.trunc(a / b) === -0 ? 0 : Math.trunc(a / b);
  }
};

const dfs = (idx, result) => {
  if (idx >= n) {
    max = Math.max(result, max);
    min = Math.min(result, min);

    return;
  }

  for (let i = 0; i < 4; i++) {
    if (op[i] > 0) {
      const a = result;
      const b = numbers[idx];

      op[i] -= 1;
      dfs(idx + 1, calculate(a, b, i));
      op[i] += 1;
    }
  }
};

dfs(1, numbers[0]);

console.log(max);
console.log(min);

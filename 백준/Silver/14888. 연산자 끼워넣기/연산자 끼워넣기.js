const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];
const numbers = inputs[1].split(' ').map(Number);
const operationCount = inputs[2].split(' ').map(Number);
let max = -Infinity;
let min = Infinity;

const operation = [];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < operationCount[i]; j++) {
    operation.push(i);
  }
}

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

const evaluate = (selected) => {
  let ans = numbers[0];

  for (let i = 0; i < selected.length; i++) {
    const opIndex = selected[i];
    const op = operation[opIndex];
    ans = calculate(ans, numbers[i + 1], op);
  }

  max = Math.max(max, ans);
  min = Math.min(min, ans);
};

const visited = Array(n - 1).fill(false);

const bt = (selected) => {
  if (selected.length === n - 1) {
    evaluate(selected);
    return;
  }

  for (let i = 0; i < n - 1; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    selected.push(i);
    bt(selected);
    selected.pop();
    visited[i] = false;
  }
};

bt([]);

console.log(max);
console.log(min);

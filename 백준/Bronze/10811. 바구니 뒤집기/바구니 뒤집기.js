const { ChildProcess } = require('child_process');
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
let baskets = Array.from({ length: n }).map((_, idx) => idx);

for (const input of inputs.slice(1)) {
  const [i, j] = input.split(' ').map((it) => +it - 1);

  baskets = [
    ...baskets.slice(0, i),
    ...baskets.slice(i, j + 1).reverse(),
    ...baskets.slice(j + 1),
  ];
}

console.log(...baskets.map((it) => it + 1));

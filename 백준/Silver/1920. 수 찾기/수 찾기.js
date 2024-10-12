const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs[0]);
const A = inputs[1].split(' ').map(Number);
const m = Number(inputs[2]);
const num = inputs[3].split(' ').map(Number);
const map = new Map();

for (let i = 0; i < n; i++) {
  const target = A[i];
  map.set(target, true);
}

for (let i = 0; i < m; i++) {
  const target = num[i];
  console.log(map.get(target) ? 1 : 0);
}

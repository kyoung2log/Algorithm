const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], A] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
let ans = 0;

const getValue = (selected) => {
  let sum = 0;
  for (let i = 0; i < n - 1; i++) {
    const left = selected[i];
    const right = selected[i + 1];

    sum += Math.abs(A[left] - A[right]);
  }

  return sum;
};

const bt = (selected) => {
  if (selected.length === n) {
    ans = Math.max(ans, getValue(selected));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (selected.includes(i)) continue;
    bt([...selected, i]);
  }
};

bt([]);

console.log(ans);

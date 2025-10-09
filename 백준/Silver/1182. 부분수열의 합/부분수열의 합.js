const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, s], inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

let ans = 0;

const bt = (selected, cnt, start) => {
  if (selected.length === cnt) {
    // console.log(selected);
    const sum = selected.reduce((pre, cur) => pre + cur);

    if (sum === s) ans += 1;
    return;
  }

  for (let i = start; i < n; i++) {
    bt([...selected, inputs[i]], cnt, i + 1);
  }
};

for (let i = 1; i <= n; i++) {
  bt([], i, 0);
}

console.log(ans);

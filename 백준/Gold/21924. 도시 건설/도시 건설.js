const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const edges = inputs.sort((a, b) => a[2] - b[2]);
const p = Array.from({ length: n + 1 }, (_, idx) => idx);
let ans = 0;

const find = (a) => {
  if (a !== p[a]) p[a] = find(p[a]);

  return p[a];
};

const union = (a, b) => {
  const pa = find(a);
  const pb = find(b);

  p[pb] = pa;
};

for (const [a, b, c] of edges) {
  const pa = find(a);
  const pb = find(b);

  if (pa === pb) continue;

  union(a, b);
  ans += c;
}

let isAllConnected = true;
const pa = find(1);
for (let i = 2; i <= n; i++) {
  if (pa !== find(i)) {
    isAllConnected = false;
    break;
  }
}

if (!isAllConnected) console.log(-1);
else {
  const totalCost = edges.reduce((pre, cur) => pre + cur[2], 0);
  console.log(totalCost - ans);
}

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const stars = [];
const edges = [];
const p = Array.from({ length: n }, (_, idx) => idx);

for (let i = 0; i < n; i++) {
  const [x, y] = inputs[i];
  stars.push([i, x, y]);
}

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const [_1, x1, y1] = stars[i];
    const [_2, x2, y2] = stars[j];

    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    edges.push([i, j, distance]);
  }
}

const find = (a) => {
  if (a !== p[a]) {
    p[a] = find(p[a]);
  }

  return p[a];
};

const union = (a, b) => {
  const pa = find(a);
  const pb = find(b);

  p[pb] = pa;
};

let ans = 0;
for (const [s, e, cost] of edges.sort((a, b) => a[2] - b[2])) {
  const ps = find(s);
  const pe = find(e);

  if (ps === pe) continue;

  ans += cost;
  union(ps, pe);
}

console.log(ans.toFixed(2));

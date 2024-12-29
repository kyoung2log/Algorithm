const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
let front = 0;
let t = 1;

const find = (a, p) => {
  if (a !== p[a]) p[a] = find(p[a], p);

  return p[a];
};

const union = (a, b, p) => {
  const pa = find(a, p);
  const pb = find(b, p);

  p[pb] = pa;
};

while (front < inputs.length - 1) {
  const [n, m] = inputs[front++];
  const p = Array.from({ length: n + 1 }, (_, idx) => idx);
  const cycles = [];

  for (let _ = 0; _ < m; _++) {
    const [s, e] = inputs[front++];
    const pS = find(s, p);
    const pE = find(e, p);

    if (pS !== pE) union(s, e, p);
    else cycles.push(s);
  }

  for (let i = 1; i <= n; i++) {
    find(i, p);
  }

  const set = new Set();
  for (const cycle of cycles) {
    set.add(p[cycle]);
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (set.has(p[i])) continue;
    ans += 1;
    set.add(p[i]);
  }

  if (ans <= 0) console.log(`Case ${t}: No trees.`);
  else if (ans === 1) console.log(`Case ${t}: There is one tree.`);
  else console.log(`Case ${t}: A forest of ${ans} trees.`);
  t += 1;
}

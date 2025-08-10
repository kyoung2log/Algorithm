const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const indegree = Array(n + 1).fill(0);
const q = [];

for (const [u, v] of inputs) {
  indegree[u] += 1;

  graph[v].push(u);
}

for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) q.push(i);
}
let ans = 0;
while (q.length) {
  const node = q.shift();
  ans += 1;

  for (const next of graph[node]) {
    indegree[next] -= 1;

    if (indegree[next] === 0) q.push(next);
  }
}

console.log(ans);
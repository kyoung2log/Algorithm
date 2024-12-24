const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const costs = [0];
const edges = Array.from({ length: n + 1 }, () => []);
const inDegree = Array(n + 1).fill(0);
const minCosts = Array(n + 1).fill(0);

for (let i = 0; i < n; i++) {
  const cost = inputs[i].shift();
  inputs[i].pop();

  costs.push(cost);

  for (const next of inputs[i]) {
    inDegree[i + 1] += 1;
    edges[next].push(i + 1);
  }
}

const q = [];
for (let i = 1; i <= n; i++) {
  if (inDegree[i] === 0) {
    minCosts[i] = costs[i];
    q.push(i);
  }
}

while (q.length) {
  const node = q.shift();

  for (const next of edges[node]) {
    inDegree[next] -= 1;
    minCosts[next] = Math.max(costs[next] + minCosts[node], minCosts[next]);

    if (inDegree[next] === 0) {
      q.push(next);
    }
  }
}

for (let i = 1; i <= n; i++) {
  console.log(minCosts[i]);
}

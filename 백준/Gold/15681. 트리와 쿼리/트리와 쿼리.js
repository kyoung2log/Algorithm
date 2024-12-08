const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, r, q] = inputs[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const dp = Array(n + 1).fill(1);
const visited = Array(n + 1).fill(false);

for (let i = 1; i < n; i++) {
  const [u, y] = inputs[i].split(' ').map(Number);

  graph[u].push(y);
  graph[y].push(u);
}

const dfs = (node) => {
  visited[node] = true;

  for (const child of graph[node]) {
    if (!visited[child]) {
      dfs(child);
      dp[node] += dp[child];
    }
  }
};

dfs(r);

for (let i = n; i < n + q; i++) {
  const target = inputs[i];

  console.log(dp[target]);
}

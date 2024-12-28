const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const map = Array.from({ length: n + 1 }, () => Array(n + 1).fill('-'));

for (const [s, e, c] of inputs) {
  graph[s].push([e, c]);
  graph[e].push([s, c]);
}

const getMinNode = (distances, visited) => {
  let minNode = -1;
  let minCost = Infinity;

  for (let i = 1; i <= n; i++) {
    if (!visited[i] && distances[i] < minCost) {
      minCost = distances[i];
      minNode = i;
    }
  }

  return minNode;
};

const dijkstra = (start) => {
  const distances = Array(n + 1).fill(Infinity);
  const visited = Array(n + 1).fill(false);

  distances[start] = 0;

  for (let _ = 0; _ < n; _++) {
    const node = getMinNode(distances, visited);

    if (node === -1) break;
    visited[node] = true;

    for (const [next, cost] of graph[node]) {
      const distance = distances[node] + cost;

      if (distances[next] > distance) {
        distances[next] = distances[node] + cost;
        map[start][next] = map[start][node] !== '-' ? map[start][node] : next;
      }
    }
  }

  return distances;
};

for (let i = 1; i <= n; i++) {
  dijkstra(i);
}

for (let i = 1; i <= n; i++) {
  let ans = '';

  for (let j = 1; j <= n; j++) {
    ans += map[i][j] + ' ';
  }

  console.log(ans.trim());
}

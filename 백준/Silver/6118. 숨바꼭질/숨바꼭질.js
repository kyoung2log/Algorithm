const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m] = inputs.shift();
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);
// 최장노드, 최장노드까지의 거리, 최장노드의 개수
const max = {
  node: n + 1,
  distance: 0,
  count: 0,
};

// 노드가 n개 있음
// 간선은 m개 있음
// 1번노드에서 제일 먼 노드를 출력해야 한다.

inputs.forEach(([s, e]) => {
  graph[s].push(e);
  graph[e].push(s);
});

const q = [[1, 0]];
visited[1] = true;

while (q.length) {
  const [node, cost] = q.shift();

  for (const next of graph[node]) {
    if (visited[next]) continue;

    visited[next] = true;
    q.push([next, cost + 1]);

    if (cost + 1 === max.distance) {
      max.count += 1;
      max.node = Math.min(max.node, next);
    }

    if (cost + 1 > max.distance) {
      max.distance = cost + 1;
      max.node = next;
      max.count = 1;
    }
  }
}

console.log(max.node, max.distance, max.count);

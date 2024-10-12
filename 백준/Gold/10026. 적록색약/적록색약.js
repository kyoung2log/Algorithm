const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');
const graph = inputs.map((it) => it.split(''));
const graphBlind = graph.map((it) => it.map((it) => (it === 'R' ? 'G' : it)));

// 깊이우선탐색 - 재귀
function dfs(x, y, map, target) {
  if (!target) return false;
  if (x < 0 || y < 0 || x >= n || y >= n) return false;
  if (map[x][y] === target) {
    map[x][y] = false;
    dfs(x + 1, y, map, target);
    dfs(x - 1, y, map, target);
    dfs(x, y + 1, map, target);
    dfs(x, y - 1, map, target);
    return true;
  }
}

let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, graph, graph[i][j])) cnt++;
  }
}

console.log(cnt);

cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, graphBlind, graphBlind[i][j])) cnt++;
  }
}

console.log(cnt);

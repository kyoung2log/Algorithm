const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...map] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

// 디버깅용
const printMap = (map) => {
  for (let i = 0; i < n; i++) {
    console.log(...map[i]);
  }
};

let ans = Infinity;
let islandCount = 0;
let islandNumber = 2;
const edges = [];

// 섬을 분리해줌
const dfs = (x, y, currentIsland) => {
  if (x < 0 || y < 0 || x >= n || y >= n) return;
  if (map[x][y] !== 1) return;

  map[x][y] = currentIsland;

  dfs(x + 1, y, currentIsland);
  dfs(x - 1, y, currentIsland);
  dfs(x, y + 1, currentIsland);
  dfs(x, y - 1, currentIsland);

  edges[islandCount].push([x, y]);
};

// 섬의 끝 지점을 찾음
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) {
      edges.push([]);
      dfs(i, j, islandNumber);
      islandNumber += 1;
      islandCount += 1;
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

islandNumber = 2;

// 끝 지점을 순회하면서 최단거리 탐색
for (const edge of edges) {
  const visited = Array.from({ length: n }, () => Array.from({ length: n }).fill(-1));

  for (const [x, y] of edge) {
    visited[x][y] = 0;
  }

  while (edge.length) {
    const [x, y] = edge.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // console.log(nx, ny);
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (map[nx][ny] === islandNumber) continue;
      if (map[nx][ny] > islandNumber) {
        ans = Math.min(ans, visited[x][y]);
        break;
      }
      if (visited[nx][ny] !== -1) continue;

      visited[nx][ny] = visited[x][y] + 1;
      edge.push([nx, ny]);
    }
  }
  islandNumber += 1;
}

console.log(ans);

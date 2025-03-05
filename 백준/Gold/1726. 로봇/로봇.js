const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m] = inputs[0];
const map = inputs.slice(1, n + 1);
const [startX, startY, startD] = inputs[n + 1];
const [endX, endY, endD] = inputs[n + 2];
const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => Array.from({ length: 5 }).fill(0)));

const direction = new Map();

direction.set(1, { left: 4, right: 3 });
direction.set(2, { left: 3, right: 4 });
direction.set(3, { left: 1, right: 2 });
direction.set(4, { left: 2, right: 1 });

// 동 서 남 북
const dx = [0, 0, 0, 1, -1];
const dy = [0, 1, -1, 0, 0];
const q = [[startX - 1, startY - 1, startD]];

visited[startX - 1][startY - 1][startD] = 1;

while (q.length) {
  const [x, y, d] = q.shift();

  for (let i = 1; i <= 3; i++) {
    const nx = x + dx[d] * i;
    const ny = y + dy[d] * i;

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) break;
    if (map[nx][ny] === 1) break;
    if (visited[nx][ny][d] === 0) {
      visited[nx][ny][d] = visited[x][y][d] + 1;
      q.push([nx, ny, d]);
    }
  }

  const ndr = direction.get(d).right;
  const ndl = direction.get(d).left;

  if (visited[x][y][ndr] === 0) {
    visited[x][y][ndr] = visited[x][y][d] + 1;
    q.push([x, y, ndr]);
  }
  if (visited[x][y][ndl] === 0) {
    visited[x][y][ndl] = visited[x][y][d] + 1;
    q.push([x, y, ndl]);
  }
}

console.log(visited[endX - 1][endY - 1][endD] - 1);

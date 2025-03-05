const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
const map = inputs.slice(1, n + 1).map((it) => it.split('').map(Number));
const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => [Infinity, Infinity]));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const q = [[0, 0, true]];
visited[0][0][0] = 1;
let front = 0;

while (front < q.length) {
  const [x, y, canRemove] = q[front++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (map[nx][ny] === 1 && canRemove) {
      if (visited[nx][ny][1] === Infinity) {
        visited[nx][ny][1] = visited[x][y][0] + 1;
        q.push([nx, ny, false]);
      }
    }
    if (map[nx][ny] === 0) {
      if (!canRemove && visited[nx][ny][1] === Infinity) {
        visited[nx][ny][1] = visited[x][y][1] + 1;
        q.push([nx, ny, canRemove]);
      } else if (canRemove && visited[nx][ny][0] === Infinity) {
        visited[nx][ny][0] = visited[x][y][0] + 1;
        q.push([nx, ny, canRemove]);
      }
    }
  }
}

const ans = Math.min(...visited[n - 1][m - 1]);
console.log(ans === Infinity ? -1 : ans);

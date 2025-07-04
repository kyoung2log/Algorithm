const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [m, n] = inputs.shift().split(' ').map(Number);
const map = inputs.map((it) => it.split('').map(Number));
const visited = Array.from({ length: n }, () => Array(m).fill(Infinity));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const q = [[0, 0, 0]];
let ans = Infinity;

visited[0][0] = 0;

while (q.length) {
  const [x, y, cnt] = q.shift();
  
  if (x === n - 1 && y === m - 1) ans = Math.min(ans, cnt);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    // 범위 체크
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

    if (map[nx][ny] === 0 && visited[nx][ny] > cnt) {
      visited[nx][ny] = cnt;
      q.push([nx, ny, cnt]);
    }
      
    if (map[nx][ny] === 1 && visited[nx][ny] - 1 > cnt) {
      visited[nx][ny] = cnt + 1;
      q.push([nx, ny, cnt + 1]);
    }
  }
}

console.log(ans);

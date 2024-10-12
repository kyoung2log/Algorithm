const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [mn, ...input] = fs.readFileSync(path).toString().split('\n');
const [m, n] = mn.split(' ').map((it) => Number(it));
const map = input.map((it) => it.split(' ').map((it) => Number(it)));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let q = [];
let front = 0;

// 시작점 찾기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1) q.push([i, j]);
  }
}

let days = 0;

while (front < q.length) {
  const [x, y] = q[front++];
  for (let j = 0; j < 4; j++) {
    const nx = dx[j] + x;
    const ny = dy[j] + y;

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (map[nx][ny] === 0) {
      map[nx][ny] = map[x][y] + 1;
      q.push([nx, ny]);
    }
  }
}

let maxDay = 0;
let allRipe = true;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0) {
      allRipe = false;
    }
    if (map[i][j] > maxDay) {
      maxDay = map[i][j];
    }
  }
}

if (allRipe) {
  console.log(maxDay - 1);
} else {
  console.log(-1);
}
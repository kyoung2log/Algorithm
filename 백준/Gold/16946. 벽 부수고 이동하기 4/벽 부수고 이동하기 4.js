const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1, 1 + n).map((line) => line.trim().split('').map(Number));

const group = Array.from({ length: n }, () => Array(m).fill(-1));
const groupSize = [];
let groupId = 0;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 0 && group[i][j] === -1) {
      const stack = [[i, j]];
      group[i][j] = groupId;
      let cnt = 1;

      while (stack.length) {
        const [x, y] = stack.pop();
        for (let k = 0; k < 4; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];
          if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
          if (map[nx][ny] !== 0) continue;
          if (group[nx][ny] !== -1) continue;
          group[nx][ny] = groupId;
          cnt++;
          stack.push([nx, ny]);
        }
      }

      groupSize[groupId] = cnt;
      groupId++;
    }
  }
}

const out = [];
for (let i = 0; i < n; i++) {
  let line = '';
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 1) {
      const seen = new Set();
      let sum = 1; // 벽을 부수면 그 자리 포함하니까 1
      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        const g = group[nx][ny];
        if (g !== -1 && !seen.has(g)) {
          seen.add(g);
          sum += groupSize[g];
        }
      }
      line += (sum % 10).toString();
    } else {
      line += '0';
    }
  }
  out.push(line);
}

console.log(out.join('\n'));

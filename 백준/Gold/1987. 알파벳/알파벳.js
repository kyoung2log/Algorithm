const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [rc, ...map] = fs.readFileSync(path).toString().trim().split('\n');
const [r, c] = rc.split(' ').map(Number);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let ans = 0;
const visited = Array(26).fill(false);

const bt = (x, y, count) => {
  ans = Math.max(ans, count);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= r || ny >= c) continue;

    const charCode = map[nx][ny].charCodeAt(0) - 'A'.charCodeAt(0);
    if (!visited[charCode]) {
      visited[charCode] = true;
      bt(nx, ny, count + 1);
      visited[charCode] = false;
    }
  }
};

const startCharCode = map[0][0].charCodeAt(0) - 'A'.charCodeAt(0);
visited[startCharCode] = true;
bt(0, 0, 1);

console.log(ans);

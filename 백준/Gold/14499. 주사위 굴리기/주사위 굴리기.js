const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
let [n, m, x, y, k] = inputs[0];
const map = inputs.slice(1, n + 1);
const comments = inputs.at(-1);
let dice = [0, 0, 0, 0, 0, 0, 0];

const moveDice = (comment) => {
  if (comment === 1) dice = [0, dice[4], dice[2], dice[1], dice[6], dice[5], dice[3]];
  if (comment === 2) dice = [0, dice[3], dice[2], dice[6], dice[1], dice[5], dice[4]];
  if (comment === 3) dice = [0, dice[2], dice[6], dice[3], dice[4], dice[1], dice[5]];
  if (comment === 4) dice = [0, dice[5], dice[1], dice[3], dice[4], dice[6], dice[2]];
};

const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];
for (const comment of comments) {
  const nx = x + dx[comment];
  const ny = y + dy[comment];

  // 이동할 위치가 범위내에 있는지 확인
  if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
  x = nx;
  y = ny;
  moveDice(comment);

  if (map[nx][ny] === 0) map[nx][ny] = dice[6];
  else {
    dice[6] = map[nx][ny];
    map[nx][ny] = 0;
  }

  console.log(dice[1]);
}

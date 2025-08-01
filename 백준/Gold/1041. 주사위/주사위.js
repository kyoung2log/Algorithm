const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], dice] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

// 8개를 회전시키고 쌓아서 정육면체를 만듬
// 하나의 면만 보이는 위치 : (n-2)(n-2)(맨 윗면) + (n-2)(n-1)(4면)
// 두개 면만 보이는 위치 : 4(n-1) + 4(n-2)
// 세개의 면이 보이는 위치 : 4개
// 경우의 수를 구해 다 더하면 됨

const getOneFaces = () => Math.min(...dice);

const getTwoFaces = () => {
  const faces = new Set();

  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
      if (i === 0 && j === 5) continue;
      if (i === 2 && j === 3) continue;
      if (i === 1 && j === 4) continue;

      faces.add(dice[i] + dice[j]);
    }
  }

  return Math.min(...faces);
};

const getThreeFaces = () => {
  const faces = new Set();

  for (const [a, b] of [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
  ]) {
    faces.add(dice[0] + dice[a] + dice[b]);
    faces.add(dice[5] + dice[a] + dice[b]);
  }

  return Math.min(...faces);
};

ans = 0;
ans += ((n - 2) * (n - 2) + (n - 2) * (n - 1) * 4) * getOneFaces();
ans += ((n - 1) * 4 + (n - 2) * 4) * getTwoFaces();
ans += 4 * getThreeFaces();
if (n === 1)
  ans = dice
    .sort((a, b) => a - b)
    .slice(0, 5)
    .reduce((pre, cur) => pre + cur);
console.log(ans);

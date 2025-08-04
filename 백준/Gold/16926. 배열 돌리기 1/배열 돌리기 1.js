const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m, r], ...map] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' '));

const printMap = () => {
  for (let i = 0; i < n; i++) {
    console.log(...map[i]);
  }
};

const rotate = () => {
  for (let d = 0; d < Math.min(n, m) / 2; d++) {
    let temp = map[d][d];

    // 상 : 앞 고정 d, 뒤에는 d ~ m-1-d
    for (let i = d; i < m - 1 - d; i++) {
      map[d][i] = map[d][i + 1];
    }

    // 우 : 앞 d ~ n-1-d, 뒤 고정 m-1-d
    for (let i = d; i < n - 1 - d; i++) {
      map[i][m - 1 - d] = map[i + 1][m - 1 - d];
    }

    // 하 : 앞 고정 n-1-d , 뒤에는 d ~ m-1-d
    for (let i = m - 1 - d; i > d; i--) {
      map[n - 1 - d][i] = map[n - 1 - d][i - 1];
    }

    // 좌 : 앞 d ~ n-1-d , 뒤고정 d
    for (let i = n - 1 - d; i > d; i--) {
      map[i][d] = map[i - 1][d];
    }

    map[d + 1][d] = temp;
  }
};

for (let i = 0; i < r; i++) rotate();

printMap();

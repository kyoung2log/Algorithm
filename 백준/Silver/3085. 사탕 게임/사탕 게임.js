const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs.shift();
const map = inputs.map((it) => it.split(''));

const dx = [1, 0];
const dy = [0, 1];

const getEatableCandies = () => {
  let maxCnt = 1;
  for (let i = 0; i < n; i++) {
    let prevRowCandy = map[i][0];
    let prevColumnCandy = map[0][i];
    let rowCnt = 1;
    let columnCnt = 1;

    for (let j = 1; j < n; j++) {
      if (prevRowCandy === map[i][j]) rowCnt += 1;
      else {
        maxCnt = Math.max(maxCnt, rowCnt, columnCnt);
        rowCnt = 1;
        prevRowCandy = map[i][j];
      }

      if (prevColumnCandy === map[j][i]) columnCnt += 1;
      else {
        maxCnt = Math.max(maxCnt, rowCnt, columnCnt);
        columnCnt = 1;
        prevColumnCandy = map[j][i];
      }
    }
    maxCnt = Math.max(maxCnt, rowCnt, columnCnt);
  }

  return maxCnt;
};

let ans = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    const ax = i;
    const ay = j;

    for (let k = 0; k < 2; k++) {
      const bx = ax + dx[k];
      const by = ay + dy[k];

      if (bx < 0 || by < 0 || bx >= n || by >= n) continue;
      if (map[ax][ay] === map[bx][by]) continue;

      let temp = map[ax][ay];
      map[ax][ay] = map[bx][by];
      map[bx][by] = temp;

      ans = Math.max(ans, getEatableCandies());

      temp = map[ax][ay];
      map[ax][ay] = map[bx][by];
      map[bx][by] = temp;
    }
  }
}

console.log(ans);

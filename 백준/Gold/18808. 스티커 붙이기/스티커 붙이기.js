const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

// 설계
// 1. 0,0 위치를 포인터로 설정 해당 포인터로부터 스티커를 붙일 수 있는지 확인
// 2. 이 떄, 스티커를 붙일 수 있는지 없는지는 해당 좌표를 모두 탐색
// 3. 만약 못 붙인타면 포인터를 오른쪽으로 이동
// 4. 만약 못 붙인다면 포인터를 아래로 이동
// 5. 못붙인다면 90도로 회전해서 다시 처음위치

const printMap = (map) => {
  for (let i = 0; i < map.length; i++) {
    console.log(...map[i]);
  }
};

const [n, m, k] = inputs[0].split(' ').map(Number);
const notebook = Array.from({ length: n }, () => Array.from({ length: m }).fill(0));

let front = 1;
let pX = 0;
let pY = 0;

const attachSticker = (x, y, sticker) => {
  const scheduledStickers = [];

  for (let i = 0; i < sticker.length; i++) {
    for (let j = 0; j < sticker[0].length; j++) {
      if (sticker[i][j] === 1) {
        if (notebook[x + i][y + j] === 1) return false;
        scheduledStickers.push([x + i, y + j]);
      }
    }
  }

  for (const [x, y] of scheduledStickers) {
    notebook[x][y] = 1;
  }

  return true;
};

const getRotateSticker = (sticker) => {
  const r = sticker.length;
  const c = sticker[0].length;
  // printMap(sticker);
  // console.log(r, c);
  // console.log();
  const newSticker = [];

  for (let i = 0; i < c; i++) {
    const line = [];

    for (let j = 0; j < r; j++) {
      // console.log(r - j - 1, i);
      line.push(sticker[r - j - 1][i]);
    }
    // console.log();
    newSticker.push(line);
  }

  return newSticker;
};

nextSticker: for (let _ = 0; _ < k; _++) {
  let [r, c] = inputs[front++].split(' ').map(Number);
  let sticker = [];

  for (let j = 0; j < r; j++) {
    const line = inputs[front++].split(' ').map(Number);

    sticker.push(line);
  }

  for (let d = 0; d < 4; d++) {
    for (let i = 0; i <= n - r; i++) {
      for (let j = 0; j <= m - c; j++) {
        const isAttachSticker = attachSticker(i, j, sticker);

        if (isAttachSticker) continue nextSticker;
      }
    }
    // 90도 회전
    // 회전 한 뒤 r, c를 변경해줘야 함
    const newSticker = getRotateSticker(sticker);
    // console.log(newSticker);

    sticker = newSticker;
    r = newSticker.length;
    c = newSticker[0].length;
  }
  // printMap(sticker);
  // break;
}

let ans = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (notebook[i][j] === 1) ans += 1;
  }
}

console.log(ans);

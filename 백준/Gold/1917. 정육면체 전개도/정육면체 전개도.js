const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' '));

// 3*4의 전개도들
dices = [
  [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
  ],
  [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 0],
  ],
  [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ],
  [
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
  ],
  [
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 0],
  ],
  [
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ],
  [
    [1, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 1],
  ],
  [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 1],
  ],
  [
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 0, 1, 1],
  ],
  [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
  ],
  [
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
  ],
];

const printMap = (map) => {
  for (let i = 0; i < map.length; i++) console.log(...map[i]);
};

const solution = (map) => {
  // 4번의 맵을 확인하기 위함

  for (let _ = 0; _ < 4; _++) {
    // printMap(map);
    // console.log();
    // 비교하고자 하는 전개도
    for (const dice of dices) {
      const h = dice.length; // 2
      const w = dice[0].length; // 5

      // 맵 탐색 시작 좌표
      for (let i = 0; i < 6 - h + 1; i++) {
        next: for (let j = 0; j < 6 - w + 1; j++) {
          // console.log(i, j);
          // 전개도의 내부 좌표
          for (let x = 0; x < h; x++) {
            for (let y = 0; y < w; y++) {
              // console.log(i, j, i + x, j + y, x, y);

              // 한 번이라도 다르면 이 전개도와는 맞지 않는 것이므로 다음 전개도를 탐색
              if (map[i + x][j + y] != dice[x][y]) continue next;
            }
          }
          // console.log();

          // 이 자리에 오면 이 전개도랑 일치하기 때문에 정육면체의 전개도임을 알 수 있음
          return true;
        }
      }
    }

    // 맵 회전
    const newMap = Array.from({ length: 6 }, () => Array(6).fill(0));

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        newMap[6 - j - 1][i] = map[i][j];
      }
    }

    map = newMap;
  }

  return false;
};

for (let i = 0; i < 18; i += 6) {
  const map = inputs.slice(i, i + 6);

  if (solution(map)) {
    console.log('yes');
    continue;
  }

  map.forEach((line) => line.reverse());
  if (solution(map)) {
    console.log('yes');
    continue;
  }

  map.reverse();
  if (solution(map)) {
    console.log('yes');
    continue;
  }

  map.forEach((line) => line.reverse());
  if (solution(map)) {
    console.log('yes');
    continue;
  }

  console.log('no');
}

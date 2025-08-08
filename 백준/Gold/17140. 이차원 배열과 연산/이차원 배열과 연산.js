const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [[r, c, k], ...map] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const sort = (size) => {
  const newMap = [];
  const countMap = new Map();
  let maxSize = -1;

  for (let i = 0; i < size; i++) {
    let line = [];

    // 숫자-숫자가나오는개수를 map 객체에 저장
    for (const num of map[i]) {
      if (num === 0) continue;
      if (countMap.has(num)) countMap.set(num, countMap.get(num) + 1);
      else countMap.set(num, 1);
    }

    // 정렬을 하기 위해 map 객체의 요소를 배열에 추가
    for (const [key, value] of countMap.entries()) {
      line.push([key, value]);
    }

    // 조건대로 정렬
    line.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    line = line.flat();

    if (line.length > 100) line = line.slice(0, 100);

    newMap.push(line);
    maxSize = Math.max(maxSize, line.length);

    countMap.clear();
  }

  newMap.forEach((line) => {
    while (line.length < maxSize) line.push(0);
  });

  map = newMap;
};

const rotate = (r, c) => {
  const newMap = Array();

  for (let i = 0; i < c; i++) {
    const line = [];
    for (let j = 0; j < r; j++) line.push(map[j][i]);
    newMap.push(line);
  }

  map = newMap;
};

let timer = 0;
let ans = -1;

while (timer <= 100) {
  if (r <= map.length && c <= map[0].length && map[r - 1][c - 1] === k) {
    ans = timer;
    break;
  }

  const row = map.length;
  const column = map[0].length;

  if (row >= column) sort(row);
  else {
    rotate(row, column);
    sort(column);
    rotate(map.length, map[0].length);
  }

  timer += 1;
}

console.log(ans);

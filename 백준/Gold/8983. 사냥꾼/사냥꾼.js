const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[m, n, l], place, ...animals] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it, idx) => {
    if (idx !== 1) return it.split(' ').map(Number);
    return it
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);
  });
let ans = 0;

const binarySearch = (x) => {
  let left = 0;
  let right = place.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (place[mid] === x) return mid;
    else if (place[mid] < x) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};

for (const [x, y] of animals) {
  if (y > l) continue;

  // 가장 가까운 사대를 찾음
  const idx = binarySearch(x);

  if (idx < place.length && Math.abs(place[idx] - x) + y <= l) {
    ans += 1;
    continue;
  }
  if (idx > 0 && Math.abs(place[idx - 1] - x) + y <= l) {
    ans += 1;
  }
}

console.log(ans);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], A] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const lis = [A[0]];
const map = [[0, A[0]]];

for (let i = 1; i < n; i++) {
  const target = A[i];

  if (lis.at(-1) < target) {
    lis.push(target);
    map.push([lis.length - 1, target]);
  } else {
    let left = 0;
    let right = lis.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (lis[mid] < target) left = mid + 1;
      else right = mid;
    }

    lis[left] = target;
    map.push([left, target]);
  }
}

console.log(lis.length);

let btIdx = lis.length - 1;
const bt = [];

for (let i = n - 1; i >= 0; i--) {
  if (map[i][0] === btIdx) {
    bt.push(map[i][1]);
    btIdx -= 1;
  }
}
console.log(...bt.reverse());

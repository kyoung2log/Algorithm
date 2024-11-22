const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

let LIS = [inputs[0]];

for (let i = 1; i < n; i++) {
  const target = inputs[i];
  if (LIS[LIS.length - 1] < target) {
    LIS.push(target);
  } else {
    let min = 0;
    let max = LIS.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      mid = Math.floor((min + max) / 2);

      if (LIS[mid] >= target) {
        max = mid;
      } else if (LIS[mid] < target) {
        min = mid + 1;
      }
    }
    LIS[min] = target;
  }
}
console.log(LIS.length);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));

let isTrigger = false;

for (let i = 1; i <= 1000000; i++) {
  const M = i
    .toString()
    .split('')
    .map((it) => Number(it))
    .reduce((pre, cur) => pre + cur, i);

  if (M === n) {
    isTrigger = true;
    console.log(i);
    break;
  }
}

if (!isTrigger) {
  console.log(0);
}

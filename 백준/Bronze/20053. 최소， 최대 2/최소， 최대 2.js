const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

for (let i = 2; i < inputs.length; i += 2) {
  const arr = inputs[i].sort((a, b) => a - b);

  console.log(arr[0], arr.at(-1));
}

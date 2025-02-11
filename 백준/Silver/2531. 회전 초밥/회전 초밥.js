const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const [N, d, k, c] = inputs[0].split(' ').map(Number);

// 만약 벨트 위에 초밥이 있다면
const sushi = inputs.slice(1).map(Number);

let maxCount = 0;
let count = 0;
const seq = sushi.slice(0, k).reduce((acc, v) => {
  if (acc[v]) acc[v]++;
  else {
    acc[v] = 1;
    count++;
    maxCount++;
  }
  return acc;
}, {});

let i = 0;
let j = k - 1;

while (i < N) {
  if (seq[sushi[i]] === 1) count--;

  seq[sushi[i]]--;

  i++;
  j++;

  if (j === N) j = 0;

  if (seq[sushi[j]]) seq[sushi[j]]++;
  else {
    seq[sushi[j]] = 1;
    count++;
  }

  maxCount = Math.max(maxCount, count + !seq[c]);
}

console.log(maxCount);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];
const numbers = inputs[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let ansSum = Infinity;
let ansLiquid = [0, 0, 0];

// 이미 선택된 수의 인덱스를 받음
const twoPointer = (selectedIdx) => {
  const selected = numbers[selectedIdx];
  let left = selectedIdx + 1;
  let right = n - 1;

  while (left < right) {
    const sum = selected + numbers[left] + numbers[right]; // 세 용액의 합
    const abs = Math.abs(sum);

    if (abs < ansSum) {
      ansSum = abs;
      ansLiquid = [selected, numbers[left], numbers[right]];
    }

    if (sum < 0) left++;
    else if (sum > 0) right--;
    else break;
  }
};

for (let i = 0; i < n - 2; i++) {
  twoPointer(i);
}

console.log(...ansLiquid.sort((a, b) => a - b));

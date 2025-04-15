const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [w, s] = inputs[0].split(' ').map(Number);
const W = inputs[1]; // cAda
const S = inputs[2]; // AbrAcadAbRa
const maya = {};
const current = {};

for (const char of W) {
  maya[char] = (maya[char] ?? 0) + 1;
}

for (let i = 0; i < w; i++) {
  const char = S[i];
  current[char] = (current[char] ?? 0) + 1;
}

const isValidMaya = () => {
  for (const char in maya) {
    if (maya[char] !== current[char]) return false;
  }

  return true;
};

let left = 0;
let right = w - 1;
let ans = 0;
while (true) {
  if (right === s) break;

  // 올바른 마야 문자열이 맞는지 확인하는 함수
  if (isValidMaya()) ans += 1;

  const deleteChar = S[left];
  const addChar = S[right + 1];

  if (current[addChar]) current[addChar] += 1;
  else current[addChar] = 1;
  current[deleteChar] -= 1;

  left += 1;
  right += 1;
}

console.log(ans);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [s, p] = inputs[0].split(' ').map(Number);
const DNA = inputs[1];
const minDnaCnt = inputs[2].split(' ').map(Number);
const dnaCnt = { A: 0, C: 0, G: 0, T: 0 };

for (let i = 0; i < p; i++) {
  const char = DNA[i];
  dnaCnt[char] += 1;
}

const isValidatedPW = () => {
  if (minDnaCnt[0] > dnaCnt.A) return false;
  if (minDnaCnt[1] > dnaCnt.C) return false;
  if (minDnaCnt[2] > dnaCnt.G) return false;
  if (minDnaCnt[3] > dnaCnt.T) return false;

  return true;
};

let ans = 0;
let left = 0;
let right = p - 1;

while (true) {
  if (right === s) break;

  if (isValidatedPW()) {
    ans += 1;
  }
  dnaCnt[DNA[left++]] -= 1;
  dnaCnt[DNA[++right]] += 1;
}

console.log(ans);

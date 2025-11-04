const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [l, c] = inputs[0].split(' ').map(Number);
const letters = inputs[1].split(' ').sort();
const vowels = ['a', 'e', 'i', 'o', 'u'];

let ans = '';

const bt = (password, idx, vCnt, cCnt) => {
  if (password.length === l) {
    if (vCnt < 1 || cCnt < 2) return;

    ans += password + '\n';
    return;
  }

  for (let i = idx; i < c; i++) {
    if (vowels.includes(letters[i])) bt(password + letters[i], i + 1, vCnt + 1, cCnt);
    else bt(password + letters[i], i + 1, vCnt, cCnt + 1);
  }
};

bt('', 0, 0, 0);

console.log(ans.trim());

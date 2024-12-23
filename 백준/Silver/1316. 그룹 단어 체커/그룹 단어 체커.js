const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let ans = 0;

const isGroupWord = (word) => {
  const charSet = new Set();
  let prevChar = '';

  for (const w of word) {
    if (charSet.has(w) && prevChar !== w) return false;
    if (!charSet.has(w)) {
      prevChar = w;
      charSet.add(w);
    }
  }

  return true;
};

for (let i = 1; i < input.length; i++) {
  if (isGroupWord(input[i])) ans += 1;
}
console.log(ans);

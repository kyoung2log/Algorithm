const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));
let answer = 0;

const cols = Array(n).fill(false);
const diag1 = Array(2 * n - 1).fill(false);
const diag2 = Array(2 * n - 1).fill(false);

const bt = (row) => {
  if (row === n) {
    answer += 1;
    return;
  }

  for (let col = 0; col < n; col++) {
    if (cols[col] || diag1[row + col] || diag2[row - col + n - 1]) continue;

    cols[col] = diag1[row + col] = diag2[row - col + n - 1] = true;
    bt(row + 1);
    cols[col] = diag1[row + col] = diag2[row - col + n - 1] = false;
  }
};

bt(0);
console.log(answer);
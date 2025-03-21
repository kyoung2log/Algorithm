const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
let ans = '';

const bt = (selected, cnt) => {
  if (cnt === m) {
    ans += selected.trim() + '\n';

    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!selected.includes(i)) bt(selected + ' ' + i, cnt + 1);
  }
};

bt('', 0);

console.log(ans.trim());
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);
let ans = '';

const bt = (selected, cnt, start) => {
  if (cnt === m) {
    ans += selected.trim() + '\n';

    return;
  }

  for (let i = start; i <= n; i++) {
    bt(selected + ' ' + i, cnt + 1, i);
  }
};

bt('', 0, 1);

console.log(ans.trim());

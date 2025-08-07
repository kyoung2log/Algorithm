const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +fs.readFileSync(path).toString().trim();

const bt = (selected) => {
  if (selected.length === n) {
    console.log(...selected);
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (selected.includes(i)) continue;
    bt([...selected, i]);
  }
};

bt([]);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const G = inputs[0];
const p = Array.from({ length: G + 1 }, (_, idx) => idx);

const find = (a) => {
  if (a !== p[a]) p[a] = find(p[a]);

  return p[a];
};

let ans = 0;
for (const g of inputs.slice(2)) {
  const dock = find(g);

  if (dock === 0) break;
  ans += 1;
  p[dock] = find(p[dock - 1]);
}

console.log(ans);

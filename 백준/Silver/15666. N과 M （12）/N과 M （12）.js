const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs
  .readFileSync(path, 'utf-8')
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m] = inputs[0];
const numbers = inputs[1].sort((a, b) => a - b);

const set = new Set();
const bt = (selected) => {
  if (selected.length === m) {
    set.add(selected.join(' '));

    return;
  }

  for (const number of numbers) {
    if (selected.at(-1) <= number) {
      bt([...selected, number]);
    }
  }
};

for (const number of numbers) {
  bt([number]);
}

for (const s of set) {
  console.log(s);
}

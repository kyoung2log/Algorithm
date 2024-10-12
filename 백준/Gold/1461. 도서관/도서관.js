const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = inputs[0].split(' ').map(Number);
const books = inputs[1].split(' ').map(Number);

const leftBooks = books
  .filter((it) => it < 0)
  .map((it) => -1 * it)
  .sort((a, b) => b - a);
const rightBooks = books.filter((it) => it > 0).sort((a, b) => b - a);

let ans = 0;

for (let i = 0; i < leftBooks.length; i += m) {
  ans += leftBooks[i] * 2;
}

for (let i = 0; i < rightBooks.length; i += m) {
  ans += rightBooks[i] * 2;
}

if (leftBooks.length === 0) ans -= rightBooks[0];
else if (rightBooks.length === 0) ans -= leftBooks[0];
else if (leftBooks.length && rightBooks.length) {
  if (leftBooks[0] > rightBooks[0]) ans -= leftBooks[0];
  else ans -= rightBooks[0];
}
console.log(ans);

const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((it) => BigInt(it));

let a, b;

if (input[0] < input[1]) {
  a = input[0];
  b = input[1];
} else {
  a = input[1];
  b = input[0];
}

const answer = [];
for (let i = a + 1n; i < b; i++) answer.push(i.toString());

if (a !== b) {
  console.log((b - a - 1n).toString());
  console.log(...answer);
} else {
  console.log(0);
}

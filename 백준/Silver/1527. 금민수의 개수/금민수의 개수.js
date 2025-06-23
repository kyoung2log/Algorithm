const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [A, B] = fs.readFileSync(path).toString().trim().split(' ');
const numbers = [0, ['4', '7']];
let ans = 0;

for (let i = 2; i < 11; i++) {
  const number = [];
  numbers[i - 1].forEach((it) => number.push(it + '4', it + '7'));
  numbers.push(number);
}

numbers[A.length].forEach((num) => {
  if (+num >= +A && +num <= B) ans += 1;
});

if (A.length !== B.length) {
  numbers[B.length].forEach((num) => {
    if (+num >= +A && +num <= B) ans += 1;
  });
}

for (let i = A.length + 1; i < B.length; i++) {
  ans += numbers[i].length;
}
console.log(ans);

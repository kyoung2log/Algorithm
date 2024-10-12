const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path));
const answer = [];
let count = 0;
let result = '';

// 하노이탑, 시작, 끝, 보조
function hanoi(n, start, end, sub) {
  if (n === 1) {
    result += `${start} ${end}\n`;
    count++;
    return;
  }
  hanoi(n - 1, start, sub, end);
  result += `${start} ${end}\n`;
  count++;
  hanoi(n - 1, sub, end, start);
}

hanoi(n, '1', '3', '2');
// if (n % 2 === 1) hanoi(n, '1', '2', '3');
// else hanoi(n, '1', '3', '2');

console.log(count);
console.log(result);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let num = Number(fs.readFileSync(path));
let line = 1;

while (num > line) {
  num -= line;
  line += 1;
}

let a = num;
let b = line - num + 1;

if (line % 2 === 0) console.log(`${a}/${b}`);
else console.log(`${b}/${a}`);

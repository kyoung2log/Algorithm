const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +fs.readFileSync(path).toString().trim();

for (let i = n; i >= 1; i--) console.log(i);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = fs.readFileSync(path).toString().trim().split('').map(Number);

console.log(n.sort((a, b) => b - a).join(''));

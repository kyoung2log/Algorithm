const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [k, n, m] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

console.log(Math.max(0, k * n - m));

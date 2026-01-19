const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [n, m] = fs.readFileSync(path).toString().trim().split(' ').map(BigInt);

console.log((n / m).toString());
console.log((n % m).toString());

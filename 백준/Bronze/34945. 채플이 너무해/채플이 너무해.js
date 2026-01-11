const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +fs.readFileSync(path).toString().trim();

console.log(n < 6 ? 'Oh My God!' : 'Success!');

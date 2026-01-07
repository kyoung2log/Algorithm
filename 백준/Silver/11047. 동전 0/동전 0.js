const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const [N, K0] = inputs[0].split(' ').map(Number);
let K = K0;

const coins = [];
for (let i = 1; i <= N; i++) {
  coins.push(Number(inputs[i]));
}

coins.sort((a, b) => b - a);

let count = 0;
for (const coin of coins) {
  if (K === 0) break;
  const use = Math.floor(K / coin);
  count += use;
  K -= coin * use;
}

console.log(count);
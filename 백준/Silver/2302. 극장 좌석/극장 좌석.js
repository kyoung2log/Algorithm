const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n').map(Number);
const n = inputs[0];
const m = inputs[1];
const dp = Array(n + 1).fill(0);
const vips = [];

for (let i = 2; i < inputs.length; i++) {
  vips.push(inputs[i]);
}

dp[0] = 1;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

let ans = 1;
let preVip = 0;

for (const vip of vips) {
  ans *= dp[vip - preVip - 1];
  preVip = vip;
}
ans *= dp[n - preVip];

console.log(ans);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
let n = 1000 - Number(fs.readFileSync(path));

let ans = 0;

while (true) {
  let coin;

  if (n >= 500) coin = 500;
  else if (n >= 100) coin = 100;
  else if (n >= 50) coin = 50;
  else if (n >= 10) coin = 10;
  else if (n >= 5) coin = 5;
  else {
    ans += n;
    break;
  }

  ans += Math.floor(n / coin);
  n = n % coin;
}
console.log(ans);

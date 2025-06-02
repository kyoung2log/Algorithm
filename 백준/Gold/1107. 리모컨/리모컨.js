const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = +inputs[0];
const m = +inputs[1];
const brokenNumbers = inputs[2];
let ans = n > 100 ? n - 100 : 100 - n;

// 만들 수 있는 숫자인지 확인
const isAvailableNumber = (number) => {
  for (const num of number) {
    if (brokenNumbers.includes(num)) return false;
  }

  return true;
};

if (n === 100) console.log(0);
else if (m === 0) console.log(Math.min(ans, n.toString().length));
else {
  let target;
  let isFindAns = false;

  for (let i = 0; i <= 500000; i++) {
    target = (n + i).toString();
    if (isAvailableNumber(target)) {
      ans = Math.min(ans, target.length + i);
      isFindAns = true;
    }

    if (n - i >= 0) {
      target = (n - i).toString();
      if (isAvailableNumber(target)) {
        ans = Math.min(ans, target.length + i);

        isFindAns = true;
      }
    }

    if (isFindAns) {
      console.log(ans);
      return;
    }
  }
  console.log(ans);
}

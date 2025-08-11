const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[_], ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

const isValidBucket = (bucket) => {
  const stack = [];

  for (let char of bucket) {
    if (char === '(') stack.push(1);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length ? false : true;
};

for (const input of inputs) {
  if (isValidBucket(input)) console.log('YES');
  else console.log('NO');
}

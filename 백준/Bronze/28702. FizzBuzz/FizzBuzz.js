const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [a, b, c] = fs.readFileSync(path).toString().trim().split('\n');

if (!isNaN(a)) {
  const ans = Number(a) + 3;

  if (ans % 3 === 0 && ans % 5 === 0) console.log('FizzBuzz');
  else if (ans % 3 === 0) console.log('Fizz');
  else if (ans % 5 === 0) console.log('Buzz');
  else console.log(ans);
} else if (!isNaN(b)) {
  const ans = Number(b) + 2;

  if (ans % 3 === 0 && ans % 5 === 0) console.log('FizzBuzz');
  else if (ans % 3 === 0) console.log('Fizz');
  else if (ans % 5 === 0) console.log('Buzz');
  else console.log(ans);
} else if (!isNaN(c)) {
  const ans = Number(c) + 1;

  if (ans % 3 === 0 && ans % 5 === 0) console.log('FizzBuzz');
  else if (ans % 3 === 0) console.log('Fizz');
  else if (ans % 5 === 0) console.log('Buzz');
  else console.log(ans);
}

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = nm.split(' ');

let [answer, hd] = ['', 0];

for (let i = 0; i < m; i++) {
  const DNA = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (const char of input) {
    DNA[char[i]] += 1;
  }
  const min = Object.values(DNA).reduce((pre, cur) => (pre > cur ? pre : cur));
  answer += Object.keys(DNA).filter((it) => DNA[it] === min)[0];
}

for (let i = 0; i < m; i++) {
  for (const char of input) {
    if (char[i] !== answer[i]) hd += 1;
  }
}

console.log(answer);
console.log(hd);

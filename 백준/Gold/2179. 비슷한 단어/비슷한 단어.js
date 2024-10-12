const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(inputs[0]);
const words = inputs.slice(1);

let maxSameLen = 0;
let q;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const s = words[i];
    const t = words[j];

    let currentSameLen = 0;
    for (let k = 0; k < Math.min(s.length, t.length); k++) {
      if (s[k] !== t[k]) break;
      currentSameLen = k + 1;
    }

    if (maxSameLen < currentSameLen) {
      maxSameLen = currentSameLen;
      q = [s, t];
    }
  }
}

if (q.length) {
  console.log(q[0]);
  console.log(q[1]);
} else {
  console.log(words[0]);
  console.log(words[1]);
}
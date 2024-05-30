## 🔴 문제

> [비밀 이메일](https://www.acmicpc.net/problem/2999)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const message = fs.readFileSync(path).toString().trim();
const n = message.length;

function getRC(n) {
  const max = Math.floor(Math.sqrt(n));
  for (let i = max; i > 0; i--) {
    if (n % i === 0) return [i, n / i].sort((a, b) => a - b);
  }
}

const [R, C] = getRC(n);

const original = Array.from({ length: C }, (_, rowIdx) =>
  Array.from({ length: R }, (_, colIdx) => message[rowIdx * R + colIdx])
);

let result = '';

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    result += original[j][i];
  }
}

console.log(result);
```

<br/>

## 🟢 풀이

문제에서 요구하는 R<=C이고, R\*C=N인 R과 C를 고른다.
i가 max의 제곱근부터 0까지 가면서 값을 찾으며 i로 나누어 떨어진다면 R과 C가 되므로 값을 찾아준다.
그리고 문제의 요구사항 대로 행렬을 만들어 값을 넣어준 뒤 다시 복호화해 값을 읽어주면 된다.

<br/>

## 🔵 Ref

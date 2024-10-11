## 🔴 문제

> [별 찍기 - 8](https://www.acmicpc.net/problem/2445)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 1; i <= n; i++) {
  console.log('*'.repeat(i) + ' '.repeat((n - i) * 2) + '*'.repeat(i));
}
for (let i = n - 1; i > 0; i--) {
  console.log('*'.repeat(i) + ' '.repeat((n - i) * 2) + '*'.repeat(i));
}
```

<br/>

## 🟢 풀이

별찍기 7 에서 찍었던 별모양 대신 공백을 찍는다고 생각하면 된다.
<br/>

## 🔵 Ref

>

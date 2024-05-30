## 🔴 문제

> [별 찍기 - 7](https://www.acmicpc.net/problem/2444)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 1; i < n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1));
}
for (let i = 0; i < n; i++) {
  console.log(' '.repeat(i) + '*'.repeat((n - i) * 2 - 1));
}
```

<br/>

## 🟢 풀이

별찍기 5랑 별찍기 6 합치면됨
<br/>

## 🔵 Ref

>

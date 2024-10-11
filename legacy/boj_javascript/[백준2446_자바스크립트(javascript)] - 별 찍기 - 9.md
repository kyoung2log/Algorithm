## 🔴 문제

> [별 찍기 - 9](https://www.acmicpc.net/problem/2446)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 0; i < n; i++) {
  console.log(' '.repeat(i) + '*'.repeat((n - i) * 2 - 1));
}
for (let i = 2; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1));
}
```

<br/>

## 🟢 풀이

별찍기 8이랑 공백과 별표 위치만 바꿔서 출력해주면 됨
<br/>

## 🔵 Ref

>

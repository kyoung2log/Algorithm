## 🔴 문제

> [별 찍기 - 6](https://www.acmicpc.net/problem/2443)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 0; i < n; i++) {
  console.log(' '.repeat(i) + '*'.repeat((n - i) * 2 - 1));
}
```

<br/>

## 🟢 풀이

별찍기 5 역으로 출력
<br/>

## 🔵 Ref

>

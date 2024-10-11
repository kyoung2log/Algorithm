## 🔴 문제

> [별 찍기 - 5](https://www.acmicpc.net/problem/2442)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1));
}
```

<br/>

## 🟢 풀이

기존의 별찍기에서 곱하기 2 한후 1씩 빼주면된다.
<br/>

## 🔵 Ref

>

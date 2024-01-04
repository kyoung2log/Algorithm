## 🔴 문제

> [별 찍기 - 3](https://www.acmicpc.net/problem/2440)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 0; i < n; i++) {
  console.log('*'.repeat(n - i));
}
```

<br/>

## 🟢 풀이

세상에서제일쉬운문제베스트1위별찍기
<br/>

## 🔵 Ref

>

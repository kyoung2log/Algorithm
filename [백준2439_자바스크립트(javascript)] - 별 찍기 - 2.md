## 🔴 문제

> [별 찍기 - 2](https://www.acmicpc.net/problem/2439)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
  // for (let j = n - 1; j > i; j--) {
  //   process.stdout.write(' ');
  // }
  // for (let j = 0; j <= i; j++) {
  //   process.stdout.write('*');
  // }
  // console.log();
}
```

<br/>

## 🟢 풀이

주석 있는 이유는 process.stdout.write(' ') 보다 repeat()가 좋다는것을 알아버려서 ㅋㅋ

<br/>

## 🔵 Ref

>

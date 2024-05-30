## 🔴 문제

> [별 찍기 - 1](https://www.acmicpc.net/problem/2438)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const n = Number(fs.readFileSync(path).toString());

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write('*');
  }
  console.log();
}
```

<br/>

## 🟢 풀이

기본적인 별찍기
줄바꿈을 하지 않으려면 process.stdout.write('\*'); 얘를 사용해주면된다.
뒤에서도 언급하겠지만 '\*'.repeat() 사용해줘도됨
<br/>

## 🔵 Ref

>

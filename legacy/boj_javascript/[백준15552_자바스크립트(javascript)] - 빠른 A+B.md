## 🔴 문제

> [빠른 A+B](https://www.acmicpc.net/problem/15552)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const numList = input.map((it) => it.split(' '));
let answer = '';

for (const [a, b] of numList) {
  const result = Number(a) + Number(b);
  answer += result + '\n';
}

console.log(answer);
```

<br/>

## 🟢 풀이

실행시간을 단축하려면... 콘솔로그를 여러번 하지 않고 문자열에 줄바꿈 기호로 더해둔 뒤 한번에 출력한다.
<br/>

## 🔵 Ref

>

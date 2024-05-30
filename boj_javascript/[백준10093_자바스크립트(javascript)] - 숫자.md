## 🔴 문제

> [숫자](https://www.acmicpc.net/problem/10093)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((it) => BigInt(it));

let a, b;

if (input[0] < input[1]) {
  a = input[0];
  b = input[1];
} else {
  a = input[1];
  b = input[0];
}

const answer = [];
for (let i = a + 1n; i < b; i++) answer.push(i.toString());

if (a !== b) {
  console.log((b - a - 1n).toString());
  console.log(...answer);
} else {
  console.log(0);
}
```

<br/>

## 🟢 풀이

나는 bigint썼는데 다른 스터디원 말을 들어보니 안써도 된다고 하신다.
어찌되었던, 숫자 뒤에 n을 붙여주면 BigInt를 다룰수 있다.

<br/>

## 🔵 Ref

>

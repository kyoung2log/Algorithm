## 🔴 문제

> [홀수](https://www.acmicpc.net/problem/2576)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
let min = 100;

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((it) => Number(it));

const answer = input.reduce((pre, cur) => {
  if (cur % 2) {
    min = min < cur ? min : cur;
    return pre + cur;
  }
  return pre;
}, 0);

if (answer) {
  console.log(answer);
  console.log(min);
} else {
  console.log(-1);
}
```

<br/>

## 🟢 풀이

reduce로 배열을 돌면서 홀수일 경우에만 최소값을 비교해 갱신해준다.

<br/>

## 🔵 Ref

>

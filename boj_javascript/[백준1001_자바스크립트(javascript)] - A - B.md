## 🔴 문제

> [A - B](https://www.acmicpc.net/problem/1001)

<br/>

## 🟡 Sol

```js
let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((it) => parseInt(it));

console.log(input[0] - input[1]);
```

<br/>

## 🟢 풀이

입력받은 값을 정수로 변경한 뒤 빼주면된다

<br/>

## 🔵 Ref

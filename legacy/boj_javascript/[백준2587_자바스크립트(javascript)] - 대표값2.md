## 🔴 문제

> [대표값2](https://www.acmicpc.net/problem/2587)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((it) => Number(it));

const sum = input.sort((a, b) => a - b).reduce((pre, cur) => pre + cur);

console.log(sum / input.length);
console.log(input[Math.floor(input.length / 2)]);
```

<br/>

## 🟢 풀이

1. 정렬한후 값을 다 더해준다.
2. 배열의 길이를 2로 나눈 후 floor로 내림해주면 중앙값 출력 완료
   <br/>

## 🔵 Ref

>

## 🔴 문제

> [최댓값](https://www.acmicpc.net/problem/2562)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((it) => Number(it));

const maxNum = input.reduce((pre, cur) => (pre > cur ? pre : cur));
console.log(maxNum + '\n' + (input.indexOf(maxNum) + 1));
```

<br/>

## 🟢 풀이

reduce 메서드를 이용해 최대값을 찾아준다. 이후 그 값의 인덱스 번호 + 1 을 출력
<br/>

## 🔵 Ref

>

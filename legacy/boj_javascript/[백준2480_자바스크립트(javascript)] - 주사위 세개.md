## 🔴 문제

> [주사위 세개](https://www.acmicpc.net/problem/2480)

<br/>

## 🟡 Sol

```js
const fs = require('fs');

let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((it) => parseInt(it));

const { size } = new Set(input);

if (size === 3) console.log(Math.max(...input) * 100);
else if (size === 2) {
  const i = input.pop();
  const j = input.pop();
  if (i === input[0]) console.log(i * 100 + 1000);
  else if (j === input[0]) console.log(j * 100 + 1000);
  else console.log(i * 100 + 1000);
} else console.log(input[0] * 1000 + 10000);
```

<br/>

## 🟢 풀이

Set 객체를 사용해 같은눈이 몇개인지 체크해준다.
같은눈의 개수에 따라 조건을 다르게 걸어주면 된다.
<br/>

## 🔵 Ref

>

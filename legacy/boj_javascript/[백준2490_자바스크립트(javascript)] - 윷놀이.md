## 🔴 문제

> [윷놀이](https://www.acmicpc.net/problem/2490)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const i of input) {
  let trimedI = i
    .split(' ')
    .map((it) => parseInt(it))
    .reduce((pre, cur) => pre + cur);

  if (trimedI === 4) console.log('E');
  else if (trimedI === 3) console.log('A');
  else if (trimedI === 2) console.log('B');
  else if (trimedI === 1) console.log('C');
  else console.log('D');
}
```

<br/>

## 🟢 풀이

한줄씩 돌면서 배인지 등인지 확인한 후 더해준다.
사실 배인지 등인지를 구분하는값이 0과 1이기 때문에 다 합해주면된다.
합한 값에 따라서 출력을 다르게 해준다.

<br/>

## 🔵 Ref

>

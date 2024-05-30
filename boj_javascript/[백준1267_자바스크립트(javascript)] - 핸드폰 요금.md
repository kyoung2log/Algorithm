## 🔴 문제

> [핸드폰 요금](https://www.acmicpc.net/problem/1267)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let y = 0;
let m = 0;
// let [y,m] = [0.0]
const call = input[1].split(' ').map((it) => Number(it));

call.forEach((it) => {
  y += (parseInt(it / 30) + 1) * 10;
  m += (parseInt(it / 60) + 1) * 15;
});

if (y === m) {
  console.log(['Y M', y].join(' '));
} else if (y < m) {
  console.log(['Y', y].join(' '));
} else {
  console.log(['M', m].join(' '));
}
```

<br/>

## 🟢 풀이

공식에 맞춰 계산한다.
흠.
여러개의 값을 한번에 출력하고싶을때 배열에 냅다 때려넣고 join 해준다.

<br/>

## 🔵 Ref

>

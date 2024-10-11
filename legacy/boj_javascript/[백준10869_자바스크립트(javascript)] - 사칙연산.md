## 🔴 문제

> [사칙연산](https://www.acmicpc.net/problem/10869)

<br/>

## 🟡 Sol

```js
let fs = require('fs');
let [a, b] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((it) => parseInt(it));

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
```

<br/>

## 🟢 풀이

js 의 구조분해를 사용해서 정수로 변환된 값이 매핑한뒤 계산
단, 자바스크립트는 // 연산자를 제공하지 않으니 parseInt() 나 Math.floor() 메서드를 사용해 정수값으로 변환해준다.
<br/>

## 🔵 Ref

>

## 🔴 문제

> [시험 성적](https://www.acmicpc.net/problem/9498)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input = parseInt(input);

if (input >= 90) {
  console.log('A');
} else if (input >= 80) {
  console.log('B');
} else if (input >= 70) {
  console.log('C');
} else if (input >= 60) {
  console.log('D');
} else {
  console.log('F');
}
```

<br/>

## 🟢 풀이

여러줄 입력시 trim()을 사용해주고 줄바꿈기호로 split() 해준다.

<br/>

## 🔵 Ref

>

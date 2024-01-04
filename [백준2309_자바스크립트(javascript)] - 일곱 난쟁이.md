## 🔴 문제

> [일곱 난쟁이](https://www.acmicpc.net/problem/2309)

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

const total = input.reduce((pre, cur) => pre + cur) - 100;

for (let i = 0; i < 9; i++) {
  const target = total - input[i];

  if (input.includes(target) && target !== input[i]) {
    const answer = input.filter((it) => it !== target && it !== input[i]);
    answer.sort((a, b) => a - b);
    console.log(...answer);
    return;
  }
}
```

<br/>

## 🟢 풀이

일곱난쟁이들의 키의 합은 100이므로 아홉난쟁이들의 키의 값에서 100을 뺀다.
뺀값은 어떠한 두 값을 더했을 경우이다.
반복문 돌면서 찾는다.

<br/>

## 🔵 Ref

>

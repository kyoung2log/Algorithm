![](https://velog.velcdn.com/images/devkyoung2/post/ec587909-6dcf-4df2-aa6b-79c184330518/image.png)

## 🔴 문제

> [이름 궁합](https://www.acmicpc.net/problem/15312)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [A, B] = fs.readFileSync(path).toString().trim().split('\n');

const STROKES = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 3,
  F: 3,
  G: 2,
  H: 3,
  I: 3,
  J: 2,
  K: 2,
  L: 1,
  M: 2,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V: 1,
  W: 1,
  X: 2,
  Y: 2,
  Z: 1,
};

function getCombinedName(A, B) {
  const combinedName = [];

  for (let i = 0; i < A.length; i++) {
    combinedName.push(A[i]);
    combinedName.push(B[i]);
  }

  return combinedName;
}

function getNameStroke(combinedName) {
  return combinedName.map((it) => STROKES[it]);
}

function getPercent(nameStroke) {
  const percent = [];

  if (nameStroke.length === 2) return nameStroke;

  for (i = 0; i < nameStroke.length - 1; i++) {
    percent.push((nameStroke[i] + nameStroke[i + 1]) % 10);
  }

  return getPercent(percent);
}

const combinedName = getCombinedName(A, B);
const nameStroke = getNameStroke(combinedName);
const percent = getPercent(nameStroke);

const result = percent
  .map((it) => it.toString())
  .map((it) => it.slice(-1))
  .join('');

console.log(result);
```

<br/>

## 🟢 풀이

각 알파벳별 획수를 객체로 선언해줘야한다.
먼저 두 이름을 궁합 로직에 맞게 경합해준다.
그 후 이름은 다시 쓰이지 않을 것이므로 알파벳값 대신 획수로 값을 바꿔준다.
이제 획수를 반복하면서 연산을 해준다. 재귀함수로 값이 2개일때 까지 구현해주면 퍼센트 값을 구할 수 있다.

<br/>

## 🔵 Ref

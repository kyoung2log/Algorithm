## 🔴 문제

> [카드 역배치](https://www.acmicpc.net/problem/10804)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');

let cards = Array.from({ length: 20 }, (_, index) => index + 1);
const range = input.map((it) => it.split(' ').map((it) => parseInt(it)));

for (const [a, b] of range) {
  cards = [
    ...cards.slice(0, a - 1),
    ...cards.slice(a - 1, b).reverse(),
    ...cards.slice(b),
  ];
}

console.log(cards.join(' '));
```

<br/>

## 🟢 풀이

로컬에서 input.txt 파일의 경로를 백준 테스트코드경로인 '/dev/stdin'로 계속 바꿔줘야 했는데 백준의 채점 서버가 리눅스라는 사실을 알게되었다.
그래서 바로 삼항연산자 경로지정해주기

암튼.. 주어진 입력대로 구간 순서를 뒤집어서 새로운 배열로 바꿔치기 해주면 된다.
<br/>

## 🔵 Ref

>

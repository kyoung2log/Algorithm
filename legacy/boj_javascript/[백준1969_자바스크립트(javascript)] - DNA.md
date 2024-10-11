## 🔴 문제

> [DNA](https://www.acmicpc.net/problem/1969)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const [n, m] = nm.split(' ');

let [answer, hd] = ['', 0];

for (let i = 0; i < m; i++) {
  const DNA = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (const char of input) {
    DNA[char[i]] += 1;
  }
  const min = Object.values(DNA).reduce((pre, cur) => (pre > cur ? pre : cur));
  answer += Object.keys(DNA).filter((it) => DNA[it] === min)[0];
}

for (let i = 0; i < m; i++) {
  for (const char of input) {
    if (char[i] !== answer[i]) hd += 1;
  }
}

console.log(answer);
console.log(hd);
```

<br/>

## 🟢 풀이

각 뉴클레오티드 개수를 카운팅 할 DNA 객체를 하나 선언한다.
입력된 DNA들을을 돌면서 뉴클레오티드의 개수를 카운팅 해주고, 제일 작은 수의 뉴클레오티드를 선택찾는다.
제일 작은수의 뉴클레오티드의 해밍디스턴스가 제일 작기 때문이다.
그후 만약 제일 작은 수가 여러개일떄는 맨 앞의 값을 선택해 answer 문자열에 추가해 출력해주면 된다.

<br/>

## 🔵 Ref

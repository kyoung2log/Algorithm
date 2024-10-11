## 🔴 문제

> [세수정렬](https://www.acmicpc.net/problem/2752)

<br/>

## 🟡 Sol

```js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', (line) => {
    input = line.split(' ');
    readline.close();
  })
  .on('close', () => {
    solutiuon(input);
    process.exit();
  });

function solutiuon(input) {
  const a = input.map((it) => parseInt(it)).sort((a, b) => a - b);
  console.log(a.join(' '));
}
```

<br/>

## 🟢 풀이

인터페이스 열어서 받아봤는데 개별로인듯
join() 메서드 사용해서 출력해준다.

<br/>

## 🔵 Ref

>

## 🔴 문제

> [수학숙제](https://www.acmicpc.net/problem/2870)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const answer = [];

for (const homework of input) {
  let target = '';
  for (const char of homework) {
    if (!isNaN(char)) {
      target += char;
    } else if (target.length > 0) {
      answer.push(target);
      target = '';
    }
  }
  if (target.length > 0) {
    answer.push(target);
    target = '';
  }
}
answer
  .map((it) => it.replace(/^0+/, ''))
  .sort((a, b) => a - b)
  .map((it) => (it.length === 0 ? '0' : it))
  .forEach((it) => console.log(it));
```

<br/>

## 🟢 풀이

(if else문) 입력값을 돌면서 문자로 값을 끊어내 숫자값을 구해 target에 연결하며 answer 배열에 추가한다.
(if문) 하나의 문장이 끝났을때도 존재하는 숫자값이 있다면 answer에 추가한다.

answer배열을 돌면서 0으로 시작하는 값 (ex 03, 04) 같은경우 0을 빈문자열로 바꿔 제거해준뒤 정렬한다.
참고로 문자열도 정렬 가능
이제 출력을 해줄텐데 이때 0이었던 갑은 맨위 map에서 빈문자열인 ''로 변경되었기에 문자로 다시 바꿔준 뒤 출력해준다.
지금 다시보니 정말 구린 코드같군..

같이 스터디하는 [미림님](https://github.com/uraflower)의 더 좋은 코드를 두고갑니다.

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();

solution(N, input);

function solution(N, words) {
  const numbers = [];
  words.forEach((word) => {
    for (let num of word.split(/[a-z]/g)) {
      if (num === '') continue;

      if (Number(num) === 0) {
        numbers.push('0');
      } else {
        numbers.push(num.replace(/^0+/, ''));
      }
    }
  });

  const sorted = numbers.sort((a, b) => Number(a) - Number(b));
  console.log(sorted.join('\n'));

```

<br/>

## 🔵 Ref

> https://github.com/FEDeepDive/CodingTest/blob/uraflower/02.%20%EB%AC%B8%EC%9E%90%EC%97%B4/%EC%88%98%ED%95%99%EC%88%99%EC%A0%9C.js

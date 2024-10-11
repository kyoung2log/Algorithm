## 🔴 문제
> [A + B](https://www.acmicpc.net/problem/1000)



<br/>

## 🟡 Sol
```js
const fs = require('fs'); 
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(inputData[0])+Number(inputData[1]))
```
<br/>

## 🟢 풀이
자바스크립트는 웹브라우저 위에서 동작하도록 만들어진 언어이다. 그래서 웹브라우저 외의 로컬 환경에서 사용하려면 Node.js를 사용해야 하는데 Node.js에서 값을 입력하는 방법은 다음과 같다.
- fs 모듈
```js
// file system 모듈을 불러온다.
const fs = require('fs'); 

// fs모듈의 readFileSync 함수를 통해 동기적으로 해당 경로의 파일 전체를 읽어들인다.
// 백준에서는 '/dev/stdin' 경로에 테스트 케이스 파일이 있다.
// 읽어드린 정보는 toString()함수를 통해 문자열로 변환하여야 사용할 수 있다.
// 입력 받은 문자열을 split() 함수를 통해 배열화한다. (split(' '), split('\n') 등)
// 예) 2 3 입력시, inputData = ['2', '3']
const inputData1 = fs.readFileSync('/dev/stdin').toString().split(' ');

// options으로 인코딩을 string 자료형으로 넘기는 경우, toString을 할 필요없이 문자열 반환
const inputData2 = fs.readFileSync(0, 'utf8').split(' ');
```
- readline 모듈
```js
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  // line을 가공하여 변수에 저장
  
}).on('close', () => {
  // 저장된 변수를 이용하여 계산 후 출력
});
```
코딩테스트에서는 복잡한 readline 모듈보다는 fs 모듈을 사용하곤 한다.
fs 모듈을 사용해 입력받은 데이터들은 배열형태로 저장이 되므로 배열 원소에 각각 접근하면 A와 B의 값을 얻을수 있다.
읽어온 데이터는 문자열 형태로 저장되므로 Number로 바꾸어 원하는 계산을 수행한다.
궁금한점 : '/dev/stdin/' 이 경로는 백준에서 문제의 입력을 가지고 있는 부분이라고 하던데 로컬에서는 어떻게 입력값을 주어야 하는지가 궁금하다. 로컬에서는 각 변수에 입력값을 설정해주어야하는가...? 


<br/>

## 🔵 Ref
> https://leeph.tistory.com/48

## 🔴 문제

> [여우는 어떻게 울지?](https://www.acmicpc.net/problem/9536)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [T, ...inputs] = fs.readFileSync(path).toString().trim().split('\n');

function getTestCase(inputs) {
  const TC = [];
  let C = [];

  inputs.forEach((it) => {
    if (it === 'what does the fox say?') {
      TC.push(C);
      C = [];
    } else {
      C.push(it);
    }
  });

  return TC;
}

function getResult(inputs) {
  const [everySounds, ...animalSounds] = inputs;
  let everySoundList = everySounds.split(' ');

  for (const animalSound of animalSounds) {
    const [animal, sound] = animalSound.split(' goes ');
    everySoundList = everySoundList.filter((it) => it !== sound);
  }
  return everySoundList.join(' ');
}

const testCase = getTestCase(inputs);
const result = testCase.map((it) => getResult(it));

console.log(result.join('\n'));
```

<br/>

## 🟢 풀이

먼저 한 줄씩 값을 읽으면서 'what does the fox say'로 테스트 케이스별로 울음소리를 분류해놓는다.
이후 여우를 제외한 나머지 동물들의 울음소리를 'goes'로 나누어준 뒤 전체 울음소리에서 각 동물들의 울음소리를 제거해준다.
반복을 마치고 남은 소리들은 무조건 여우의 소리므로 join() 메서드를 사용해 출력해주면 된다.

<br/>

## 🔵 Ref

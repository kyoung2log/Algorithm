## 🔴 문제

> [Java vs C++](https://www.acmicpc.net/problem/3613)

<br/>

## 🟡 Sol

```js
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const input = fs.readFileSync(path).toString().trim();

const javaRegex = /^[a-z][a-zA-Z]*$/;
const cppRegex = /^[a-z](?!.*__)[a-z_]*[^_A-Z]$/;

if (javaRegex.test(input)) {
  const cppStyle = input.replace(
    /[A-Z]/g,
    (match) => `_${match.toLowerCase()}`
  );

  console.log(cppStyle);
} else if (cppRegex.test(input)) {
  const javaStyle = input
    .split('_')
    .map((it, i) => (i === 0 ? it : it.charAt(0).toUpperCase() + it.slice(1)));

  console.log(javaStyle.join(''));
} else {
  console.log('Error!');
}
```

<br/>

## 🟢 풀이

![](https://velog.velcdn.com/images/devkyoung2/post/193e36ea-b857-4de3-8192-9b3ce8cea340/image.png)

너무 많은 고통을 받은 문제.. 결국 스터디원께 질문했더니...

![](https://velog.velcdn.com/images/devkyoung2/post/6649494b-232b-4af5-aca9-90e04d916e9f/image.png)

백준이 잘못한걸로......
자바 스타일과 씨플플 스타일의 변수명 규칙에 맞는 정규식 두개를 만들어 주었다.

[@정욱님](https://github.com/hatchling13) 처럼 정규식을 쓰지 않고 아래와 같이 풀이할 수 있다.

```js
const fs = require('fs');

/**
 * @param {string} str
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {string} str
 */
function isUpperCase(str) {
  return str
    .split('')
    .every((character) => character.toUpperCase() === character);
}

/**
 * @param {string} variableName
 */
function isCpp(variableName) {
  const letters = variableName.split('');

  if (letters[0] === '_') {
    return false;
  }

  if (letters[letters.length - 1] === '_') {
    return false;
  }

  if (variableName.includes('__')) {
    return false;
  }

  if (letters.filter((letter) => letter !== '_').some(isUpperCase)) {
    return false;
  }

  return true;
}

/**
 * @param {string} variableName
 */
function isJava(variableName) {
  const letters = variableName.split('');

  if (variableName.includes('_')) {
    return false;
  }

  if (isUpperCase(letters[0])) {
    return false;
  }

  return true;
}

/**
 * @param {string} variableName
 */
function javaToCpp(variableName) {
  let result = '';

  variableName.split('').forEach((value) => {
    if (isUpperCase(value)) {
      result += '_';
    }

    result += value.toLowerCase();
  });

  return result;
}

/**
 * @param {string} variableName
 */
function cppToJava(variableName) {
  const [first, ...last] = variableName.split('_');

  return [first, ...last.map(capitalizeFirstLetter)].join('');
}

const input = fs.readFileSync('/dev/stdin').toString().trim();

if (isCpp(input)) {
  console.log(cppToJava(input));
} else if (isJava(input)) {
  console.log(javaToCpp(input));
} else {
  console.log('Error!');
}
```

<br/>

## 🔵 Ref

> https://github.com/FEDeepDive/CodingTest/blob/hatchling13/02.%20%EB%AC%B8%EC%9E%90%EC%97%B4/Java%20vs%20C%2B%2B.js

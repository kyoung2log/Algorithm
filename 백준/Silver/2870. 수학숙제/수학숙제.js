const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');
const answer = [];

for (const homework of input) {
  let target = '';
  // ?? isNaN() 보다 Number.isNaN() 사용을 권장하는데 그러면 Number로 한번 변환해줘야 하는데 그래도 Number.isNaN()를 사용하는것이 맞을까?
  [...homework].forEach((it) => {
    if (!isNaN(it)) {
      target += it;
    } else if (target.length !== 0) {
      answer.push(target);
      target = '';
    }
  });
  if (target.length !== 0) {
    answer.push(target);
    target = '';
  }
}
answer
  .map((it) => it.replace(/^0+/, ''))
  .sort((a, b) => a - b)
  .forEach((it) => console.log(it.length === 0 ? 0 : it));

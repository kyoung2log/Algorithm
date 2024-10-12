const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [head, ...tail] = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(head);
const flowers = tail
  .map((it) => it.split(' ').map((it) => (it.length < 2 ? '0' + it : it)))
  .map((it) => [Number(it[0] + it[1]), Number(it[2] + it[3])]);

const sortedArr = flowers.sort((a, b) => b[1] - a[1]);
let result = 0;
let targetDate = 1131;
let startDates = [];
let answer = [];
// console.log(sortedArr);

for (const [startDate, endDate] of sortedArr) {
  // console.log();
  // console.log(startDate, endDate, targetDate);
  if (endDate >= targetDate) {
    // console.log('if : ', startDates);
    startDates.push(startDate);
  } else {
    targetDate = Math.min(...startDates);
    if (targetDate <= 301) {
      result++;
      answer.push(result);
      break;
    }
    if (endDate < targetDate) {
      answer.push(0);
      break;
    }
    result++;
    startDates = [startDate];
    // console.log('else : ', startDates, targetDate);
  }
}

if (targetDate > 301) {
  targetDate = Math.min(...startDates);
  if (targetDate > 301) {
    answer.push(0);
  } else {
    result++;
  }
}

console.log(answer.length !== 0 ? answer[0] : result);

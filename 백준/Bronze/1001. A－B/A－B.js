let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const answer = input
  .map((it) => parseInt(it))

console.log(answer[0]-answer[1]);
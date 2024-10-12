const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [n, ...input] = fs.readFileSync(path).toString().trim().split('\n');

const command = input.map((it) => it.split(' '));
const que = [];
let popped = 0;
let result = '';

for (cmd of command) {
  let queLen = (que.length - popped).toString();
  // console.log(cmd[0], que, popped);
  switch (cmd[0]) {
    case 'size':
      result += queLen + '\n';
      // console.log(queLen);
      break;
    case 'empty':
      result += (queLen == '0' ? '1' : '0') + '\n';
      // console.log(`${queLen == 0 ? 1 : 0}`);
      break;
    case 'front':
      result += (queLen == '0' ? '-1' : que[popped]) + '\n';
      // console.log(`${queLen == 0 ? -1 : que[popped]}`);
      break;
    case 'back':
      result += (queLen == '0' ? '-1' : que[que.length - 1]) + '\n';
      // console.log(`${queLen == 0 ? -1 : que[que.length - 1]}`);
      break;
    case 'pop':
      if (queLen === '0') result += '-1\n';
      // console.log(-1);
      else {
        result += que[popped] + '\n';
        // console.log(que[popped]);
        popped++;
      }
      break;
    case 'push':
      que.push(cmd[1]);
  }
}

console.log(result);
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front

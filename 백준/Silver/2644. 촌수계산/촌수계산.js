const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const n = inputs.shift()[0];
const [a, b] = inputs.shift();
inputs.shift();

let ans = -1;

const family = Array.from({ length: n + 1 }, () => []);

for (const [x, y] of inputs) {
  family[x].push(y);
  family[y].push(x);
}

const q = [a];
const visited = Array(n + 1).fill(-1);

visited[a] = 0;

while (q.length) {
  const cur = q.shift();

  if (cur === b) {
    ans = visited[cur];
    break;
  }

  for (const next of family[cur]) {
    if (visited[next] === -1) {
      visited[next] = visited[cur] + 1;
      q.push(next);
    }
  }
}

console.log(ans);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const inDegree = Array(n + 1).fill(0);

for (const [a, b] of inputs) {
  graph[a].push(b);
  inDegree[b] += 1;
}

const getNextNode = () => {
  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === 0) {
      inDegree[i] -= 1;
      return i;
    }
  }
};

let ans = '';
for (let _ = 0; _ < n; _++) {
  const current = getNextNode();
  ans += current + ' ';

  for (const next of graph[current]) {
    inDegree[next] -= 1;
  }
}

console.log(ans.trim());
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

const n = +inputs[0];
const colors = inputs[1].split(' ').map(Number);
const tree = Array.from({ length: n }, () => []);
const visited = Array(n).fill(false);

for (let i = 2; i < n + 1; i++) {
  const [a, b] = inputs[i].split(' ').map(Number);

  tree[a - 1].push(b - 1);
  tree[b - 1].push(a - 1);
}

let answer = colors[0] ? 1 : 0;

const dfs = (node) => {
  visited[node] = true;

  for (const next of tree[node]) {
    if (visited[next]) continue;

    if (colors[next] !== colors[node]) answer++;
    dfs(next);
  }
};

dfs(0);
console.log(answer);

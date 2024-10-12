const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
let t = Number(inputs[0]);

let index = 1;
while (t--) {
  const n = Number(inputs[index++]);
  const students = inputs[index++].split(' ').map((it) => Number(it) - 1);

  const visited = new Array(n).fill(false);
  const finished = new Array(n).fill(false);
  let ans = 0;

  const dfs = (cur) => {
    visited[cur] = true;
    const next = students[cur];

    if (!visited[next]) {
      dfs(next);
    } else if (!finished[next]) {
      let cycleNode = next;
      ans++;
      while (cycleNode !== cur) {
        cycleNode = students[cycleNode];
        ans++;
      }
    }

    finished[cur] = true;
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  console.log(n - ans);
}

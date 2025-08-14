const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const q = [[n, 0, n + '']];
const visited = Array(200001).fill(false);
const prev = Array(200001).fill(-1);

while (q.length) {
  const [node, cnt] = q.shift();
  if (node === k) {
    let cur = k;
    let ans = [k];
    while (cur !== n) {
      ans.push(prev[cur]);
      cur = prev[cur];
    }

    console.log(cnt);
    console.log(ans.reverse().join(' '));
    return;
  }

  for (const next of [node * 2, node + 1, node - 1]) {
    if (next < 0 || next > 200000) continue;
    if (!visited[next]) {
      visited[next] = true;
      prev[next] = node;
      q.push([next, cnt + 1]);
    }
  }
}

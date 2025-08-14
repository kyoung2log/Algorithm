const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = fs.readFileSync(path).toString().trim().split(' ').map(Number);

const q = [[n, 0, n + '']];
const visited = Array(200001);

const checkRange = (node) => {
  return node >= 0 && node <= 200000;
};

while (q.length) {
  const [node, cnt, route] = q.shift();
  if (node === k) {
    console.log(cnt);
    console.log(route);
    return;
  }
  let next;

  next = node * 2;
  if (checkRange(next) && !visited[next]) {
    visited[next] = true;
    q.push([next, cnt + 1, route + ' ' + next]);
  }

  next = node + 1;
  if (checkRange(next) && !visited[next]) {
    visited[next] = true;
    q.push([next, cnt + 1, route + ' ' + next]);
  }

  next = node - 1;
  if (checkRange(next) && !visited[next]) {
    visited[next] = true;
    q.push([next, cnt + 1, route + ' ' + next]);
  }
}

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, q], number, ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const tree = Array(4 * n).fill(0);

const init = (start, end, node) => {
  if (start === end) return (tree[node] = number[start]);

  const mid = Math.floor((start + end) / 2);
  return (tree[node] = init(start, mid, node * 2) + init(mid + 1, end, node * 2 + 1));
};

const update = (start, end, node, idx, diff) => {
  if (start > idx || end < idx) return;

  tree[node] += diff;
  if (start === end) return;

  const mid = Math.floor((start + end) / 2);

  update(start, mid, node * 2, idx, diff);
  update(mid + 1, end, node * 2 + 1, idx, diff);
};

const sum = (start, end, node, left, right) => {
  if (end < left || start > right) return 0;
  if (left <= start && end <= right) return tree[node];

  const mid = Math.floor((start + end) / 2);

  return sum(start, mid, node * 2, left, right) + sum(mid + 1, end, node * 2 + 1, left, right);
};

init(0, n - 1, 1);

for (const [x, y, a, b] of inputs) {
  // 합계 출력
  const s = Math.min(x - 1, y - 1);
  const e = Math.max(x - 1, y - 1);
  console.log(sum(0, n - 1, 1, s, e));

  // 쿼리 수행
  const diff = b - number[a - 1];
  number[a - 1] = b;
  update(0, n - 1, 1, a - 1, diff);
}

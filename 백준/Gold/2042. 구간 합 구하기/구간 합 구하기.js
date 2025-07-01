const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const [n, m, k] = inputs[0].split(' ').map(Number);
const numbers = inputs.slice(1, n + 1).map(BigInt);
const queries = inputs.slice(n + 1).map((it) => it.split(' ').map(Number));
const tree = Array(n * 4).fill(0n);

// 시작노드의 인덱스, 끝 노드의 인덱스, 현재 노드의 인덱스
const init = (start, end, node) => {
  if (start === end) return (tree[node] = numbers[start]);

  const mid = Math.floor((start + end) / 2);
  return (tree[node] = init(start, mid, node * 2) + init(mid + 1, end, node * 2 + 1));
};

const update = (start, end, node, idx, diff) => {
  if (start > idx || idx > end) return; // 배열의 범위를 벗어나느경우 연산 X

  tree[node] += diff;
  if (start === end) return; // 리프 노드인경우 메인포문에서 바꿔줬기 때문에 바꿔줄 필요 X

  const mid = Math.floor((start + end) / 2);
  update(start, mid, node * 2, idx, diff);
  update(mid + 1, end, node * 2 + 1, idx, diff);
};

const sum = (start, end, node, left, right) => {
  if (start > right || left > end) return 0n;
  if (left <= start && end <= right) return tree[node];

  const mid = Math.floor((start + end) / 2);
  return sum(start, mid, node * 2, left, right) + sum(mid + 1, end, node * 2 + 1, left, right);
};

init(0, n - 1, 1);

for (const [a, b, c] of queries) {
  if (a === 1) {
    const diff = BigInt(c) - numbers[b - 1];
    numbers[b - 1] = BigInt(c); // 값 바꿔치기
    // 리프노트부터 루트노드, 1번노드부터 탑색
    // b-1번이 포함된 서브트리만 수정을 해야하므로 번위를 체크할 인덱스, 연산해야할 차이값
    update(0, n - 1, 1, b - 1, diff);
  } else console.log(sum(0, n - 1, 1, b - 1, c - 1).toString());
}

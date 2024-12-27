const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, m], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const tree = Array(4 * n).fill(0);

// start 인덱스부터, end 인덱스까지의 수를 확인함(세그먼트 트리랑 상관 없음)
// 현재 처리중인 노드가 node(세그먼트 트리의 노드값)
// 값이 변화한 idx와 그 차이값 diff
const update = (start, end, node, idx, diff) => {
  // 값이 변화할 인덱스가 탐색 범위를 벗어나면 재귀 종료
  if (start > idx || idx > end) return;

  // 세그먼트 트리에 차이밧을 적용함
  tree[node] += diff;

  // 차이값을 적용한 뒤 다음 재귀호출을 해야함
  // 이 때 리프 노드라면 탑색을 종료한다.
  if (start === end) return;

  // 재귀를 적용할 중간값을 구함
  const mid = Math.floor((start + end) / 2);
  // node * 2는 현재 노드의 자식노드
  update(start, mid, node * 2, idx, diff);
  update(mid + 1, end, node * 2 + 1, idx, diff);
};

const sum = (start, end, node, left, right) => {
  // 탐색 범위를 벗어나면 종료
  if (right < start || end < left) return 0;
  if (left <= start && end <= right) return tree[node];

  const mid = Math.floor((start + end) / 2);
  return sum(start, mid, node * 2, left, right) + sum(mid + 1, end, node * 2 + 1, left, right);
};

for (const input of inputs) {
  const [type, p, q] = input;

  // 업데이트 로직 수행
  if (type === 1) update(0, n - 1, 1, p - 1, q);

  //  합계 로직 수행
  if (type === 2) console.log(sum(0, n - 1, 1, p - 1, q - 1));
}

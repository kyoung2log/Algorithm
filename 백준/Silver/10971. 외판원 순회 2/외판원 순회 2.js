const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...W] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(1 << (N - 1)).fill(0));

const TSP = (n, route) => {
  if (dp[n][route] !== 0) return dp[n][route];

  // 모든 도시를 다 방문했을 경우 route는 1만 가져야 하므로 1<<(n-1)에서 1을 빼줌
  // 0이 아니라면, 즉 길이 있다면 해당 값을 리턴 혹은 무한대를 리턴
  if (route === (1 << (N - 1)) - 1) return W[n][0] || Infinity;

  // 정답이 될 최소값
  let min = Infinity;

  for (let i = 1; i < N; i++) {
    if (!W[n][i]) continue;
    if (route & (1 << (i - 1))) continue;

    const distance = W[n][i] + TSP(i, route | (1 << (i - 1)));
    min = Math.min(distance, min);
  }
  dp[n][route] = min;

  return min;
};

console.log(TSP(0, 0));

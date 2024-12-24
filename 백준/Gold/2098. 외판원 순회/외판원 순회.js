const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [N, ...W] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const dp = Array.from({ length: N }, () => Array(1 << (N - 1)).fill(0));

// n : 현재 도시 위치
// route : 방문한 도시들의 집합(비트)
const dfs = (n, route) => {
  if (dp[n][route] !== 0) return dp[n][route];

  // 모든 도시를 방문했을 때 처음 도시로 돌아가는 경우 리턴
  if (route === (1 << (N - 1)) - 1) return W[n][0] || Infinity;

  let min = Infinity;
  for (let i = 1; i < N; i++) {
    if (!W[n][i]) continue; // 현재 도시에서 다음 도시(i)로 갈 경로 없음
    if (route & (1 << (i - 1))) continue; // 이미 방문한 도시인 경우

    const distance = W[n][i] + dfs(i, route | (1 << (i - 1)));
    if (distance < min) min = distance;
  }
  dp[n][route] = min;

  return min;
};

console.log(dfs(0, 0));

// https://justicehui.github.io/icpc/2020/10/24/10272/

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
const T = +inputs[0];
let front = 1;

const dist = (p1, p2) => {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

for (let t = 1; t <= T; t++) {
  const n = +inputs[front++];
  const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(-1)); // i와 j를 방문 했을 때, 지금까지 지나온 거리의 최소값
  const c = [null];

  for (let _ = 0; _ < n; _++) {
    const [x, y] = inputs[front++].split(' ').map(Number);
    c.push({ x, y });
  }

  const dist = (start, end) => {
    const dx = start.x - end.x;
    const dy = start.y - end.y;

    return Math.sqrt(dx * dx + dy * dy);
  };

  const solution = (i, j) => {
    if (dp[i][j] >= 0) return dp[i][j];
    if (i === n) return (dp[i][j] = dist(c[j], c[n]));
    if (j === n) return (dp[i][j] = dist(c[i], c[n]));

    const next = Math.max(i, j) + 1;

    const left = solution(next, j) + dist(c[i], c[next]);
    const right = solution(i, next) + dist(c[j], c[next]);

    return (dp[i][j] = Math.min(left, right));
  };

  console.log(solution(1, 1));
}

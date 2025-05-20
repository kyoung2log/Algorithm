const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n] = inputs[0];
const cities = inputs.slice(1);

const getCost = (A, B) => {
  const [xa, ya] = A;
  const [xb, yb] = B;
  return Math.hypot(xa - xb, ya - yb);
};

const dp = Array.from({ length: n }, () => Array(1 << n).fill(-1));

const tsp = (current, visited) => {
  if (visited === (1 << n) - 1) {
    return getCost(cities[current], cities[0]);
  }

  if (dp[current][visited] !== -1) return dp[current][visited];

  let min = Infinity;

  for (let next = 0; next < n; next++) {
    if (visited & (1 << next)) continue;
    const cost = getCost(cities[current], cities[next]);
    const result = tsp(next, visited | (1 << next)) + cost;
    min = Math.min(min, result);
  }

  return (dp[current][visited] = min);
};

console.log(tsp(0, 1));

function solution(n, k) {
  const service = Math.floor(n / 10);
  var answer = k > service ? k - service : 0;
  return 12000 * n + 2000 * answer;
}

function solution(n, k) {
  return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}

function solution(n, k) {
  k -= ~~(n / 10);
  if (k < 0) k = 0;
  return n * 12000 + k * 2000;
}

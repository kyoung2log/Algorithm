function solution(n) {
  var answer = 0;
  for (let i = 2; i <= n; i += 2) {
    answer += i;
  }

  return answer;
}

function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

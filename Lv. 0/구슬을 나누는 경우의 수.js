function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

function solution(balls, share) {
  var answer = Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
  return answer;
}

const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const lcm = (a, b) => (a * b) / gcd(a, b);

function solution(n) {
  return lcm(6, n) / 6;
}

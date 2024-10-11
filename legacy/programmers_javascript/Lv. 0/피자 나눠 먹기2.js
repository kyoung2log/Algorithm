const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
const lcm = (a, b) => (a * b) / gcd(a, b);

function solution(n) {
  return lcm(6, n) / 6;
}

const solution = (n) => {
  let piece = 6;

  while (true) {
    if (piece % n === 0) {
      break;
    }
    piece += 6;
  }

  return piece / 6;
};

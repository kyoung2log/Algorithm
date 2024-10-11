function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  const numer = numer1 * denom2 + numer2 * denom1;
  const denom = denom1 * denom2;
  answer.push(numer, denom);

  for (let i = denom; i >= 2; i--) {
    if (answer[1] % i === 0 && answer[0] % i === 0) {
      answer = [answer[0] / i, answer[1] / i];
    }
  }

  return answer;
}

function fnGCD(a, b) {
  return a % b ? fnGCD(b, a % b) : b;
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = fnGCD(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}

// 유클리드 호제법 정리
function solution(num1, num2) {
  const gcd = (a, b) => (a % b ? gcd(b, a % b) : b);
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}

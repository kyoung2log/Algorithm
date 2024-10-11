function solution(n) {
  let i = 1;
  let answer = 1;
  while (true) {
    if (answer > n) {
      return --i;
    }
    i += 1;
    answer *= i;
  }
}

function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}

function solution(n) {
  var answer = 0,
    count = 1,
    i = 1;
  while (count <= n) {
    i++, answer++;
    count = count * i;
  }

  return answer;
}

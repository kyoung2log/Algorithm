function solution(array, n) {
  let answer = 0;
  for (const item of array) {
    if (item === n) {
      answer += 1;
    }
  }
  return answer;
}

function solution(array, n) {
  let answer = array.filter((item) => item === n);
  return answer.length;
}

function solution(box, n) {
  const answer = box.reduce((pre, cur) => {
    return pre * Math.floor(cur / n);
  }, 1);

  return answer;
}

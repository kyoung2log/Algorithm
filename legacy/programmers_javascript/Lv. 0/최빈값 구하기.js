function solution(array) {
  const answer = {};
  const set = new Set(array);
  let maxCnt = 0;

  const realanswer = [];

  for (const i of set) {
    const cnt = array.filter((item) => item === i).length;
    answer[i] = cnt;
    if (cnt > maxCnt) {
      maxCnt = cnt;
    }
  }

  for (const i in answer) {
    if (maxCnt === answer[i]) {
      realanswer.push(i);
    }
  }

  if (realanswer.length > 1) {
    return -1;
  }
  return Number(realanswer[0]);
}

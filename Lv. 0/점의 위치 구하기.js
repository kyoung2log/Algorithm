function solution(dot) {
  if (dot[0] * dot[1] > 0) {
    return dot[0] > 0 ? 1 : 3;
  }
  return dot[0] > 0 ? 4 : 2;
}

function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;

  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

function solution(angle) {
  if (angle < 90) {
    return 1;
  }
  if (angle === 90) {
    return 2;
  }
  if (angle < 180) {
    return 3;
  }
  if (angle === 180) {
    return 4;
  }
}

function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

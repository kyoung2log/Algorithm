const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n, l], ...map] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

let ans = 0; // 정답 개수

outer: for (let i = 0; i < n; i++) {
  const used = Array(n).fill(false);

  for (let j = 0; j < n - 1; j++) {
    const curr = map[i][j];
    const next = map[i][j + 1];
    const offset = curr - next;

    // 현재칸과 다음칸이 같음
    if (offset === 0) continue;

    // 낮은 칸과 높은 칸의 높이 차이가 1이 아닌 경우
    if (Math.abs(offset) > 1) continue outer;

    // 높은칸 -> 낮은칸
    if (offset === 1) {
      for (let k = 1; k <= l; k++) {
        // 범위를 벗어남
        if (j + k >= n) continue outer;

        // 경사로를 놔줌
        if (next !== map[i][j + k] || used[j + k]) continue outer;
        used[j + k] = true;
      }
    }

    // 낮은칸 -> 높은칸
    if (offset === -1) {
      for (let k = 0; k < l; k++) {
        // 범위를 벗어남
        if (j - k < 0) continue outer;

        // 경사로를 놔줌
        if (curr !== map[i][j - k] || used[j - k]) continue outer;
        used[j - k] = true;
      }
    }
  }

  ans += 1; // 성공적으로 끝까지 탐색했으면 정답개수 증가
}

outer: for (let i = 0; i < n; i++) {
  const used = Array(n).fill(false);

  for (let j = 0; j < n - 1; j++) {
    const curr = map[j][i];
    const next = map[j + 1][i];
    const offset = curr - next;

    // 현재칸과 다음칸이 같음
    if (offset === 0) continue;

    // 낮은 칸과 높은 칸의 높이 차이가 1이 아닌 경우
    if (Math.abs(offset) > 1) continue outer;

    // 높은칸 -> 낮은칸
    if (offset === 1) {
      for (let k = 1; k <= l; k++) {
        // 범위를 벗어남
        if (j + k >= n) continue outer;

        // 경사로를 놔줌
        if (next !== map[j + k][i] || used[j + k]) continue outer;
        used[j + k] = true;
      }
    }

    // 낮은칸 -> 높은칸
    if (offset === -1) {
      for (let k = 0; k < l; k++) {
        // 범위를 벗어남
        if (j - k < 0) continue outer;

        // 경사로를 놔줌
        if (curr !== map[j - k][i] || used[j - k]) continue outer;
        used[j - k] = true;
      }
    }
  }

  ans += 1; // 성공적으로 끝까지 탐색했으면 정답개수 증가
}

console.log(ans);

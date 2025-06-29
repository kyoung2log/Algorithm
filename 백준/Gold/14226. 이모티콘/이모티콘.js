const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const s = +fs.readFileSync(path).toString().trim();
const visited = Array.from({ length: s * 2 }, () => Array(s * 2).fill(false));

const q = [[1, 0, 0]];
visited[1][0] = true;

while (q.length) {
  const [current, clipboard, cnt] = q.shift();

  // 목표인 s자리 수 이모티콘을 만들어 냄
  if (current === s) {
    console.log(cnt);
    break;
  }

  // 클립보드에 있는 모든 이모티콘을 화면에 붙여넣기 함
  if (current + clipboard < 2 * s && !visited[current + clipboard][clipboard]) {
    visited[current + clipboard][clipboard] = true;
    q.push([current + clipboard, clipboard, cnt + 1]);
  }

  // 화면에 있는 이모티콘 중 하나를 삭제
  if (current > 1 && !visited[current - 1][clipboard]) {
    visited[current - 1][clipboard] = true;
    q.push([current - 1, clipboard, cnt + 1]);
  }

  // 화면에 있는 이모티콘을 모두 복사해서 클립보드에 저장
  if (!visited[current][current]) {
    visited[current][current] = true;
    q.push([current, current, cnt + 1]);
  }
}

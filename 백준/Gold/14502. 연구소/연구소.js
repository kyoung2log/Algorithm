const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'Wiki\\input.txt';
const [nm, ...map] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const [n, m] = nm;

const findVirus = (map) => {
  const virus = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 2) virus.push([i, j]);
    }
  }

  return virus;
};

const spreadVirus = (virus, map) => {
  const q = [...virus];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let front = 0;

  while (front < q.length) {
    const [x, y] = q[front++];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (map[nx][ny] === 0) {
        map[nx][ny] = 2;
        q.push([nx, ny]);
      }
    }
  }
};

const getSafeAreaSize = (currentMap) => {
  let safeAreaSize = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (currentMap[i][j] === 0) safeAreaSize += 1;
    }
  }

  return safeAreaSize;
};

let maxSize = 0;

const selectWalls = (walls, start) => {
  if (walls.length === 3) {
    const currentMap = map.map((it) => [...it]);
    const virus = findVirus(currentMap);
    spreadVirus(virus, currentMap);
    const safeAreaSize = getSafeAreaSize(currentMap);

    if (maxSize < safeAreaSize) maxSize = safeAreaSize;

    return;
  }

  for (let i = start; i < n * m; i++) {
    const x = Math.floor(i / m);
    const y = i % m;

    if (map[x][y] === 0) {
      map[x][y] = 1;
      selectWalls([...walls, i], i);
      map[x][y] = 0;
    }
  }
};

selectWalls([], 0);

console.log(maxSize);

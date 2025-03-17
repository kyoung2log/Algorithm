const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');

let [n, m, _] = inputs[0].split(' ').map(Number);
let map = [];
const query = inputs.at(-1).split(' ');

const printMap = () => {
  for (let i = 0; i < map.length; i++) {
    console.log(...map[i]);
  }
};

for (let i = 1; i <= n; i++) {
  const line = inputs[i].split(' ');

  map.push(line);
}

for (const q of query) {
  if (q === '1') {
    const newMap = [];

    for (let i = n - 1; i >= 0; i--) {
      newMap.push(map[i]);
    }

    map = newMap;
  } //
  else if (q === '2') {
    map.forEach((it) => it.reverse());
  }

  // 0,0  0,1  0,2  0,3
  // 1,0  1,1  1,2  1,3
  // 2,0  2,1  2,2  2,3

  // n-1,0  n-2,0  n-3,0  n-4,0  ...  0,0
  // n-1,1  n-2,1  n-3,1  n-4,1  ...  0,1
  // ...
  // n-1,m-1  n-2,m-1  n-3,m-1  ...  0,m-1
  else if (q === '3') {
    const newMap = [];

    for (let i = 0; i < m; i++) {
      const line = [];
      for (let j = n - 1; j >= 0; j--) {
        line.push(map[j][i]);
      }
      newMap.push(line);
    }

    map = newMap;
    n = map.length;
    m = map[0].length;
  }

  // 0,0  0,1  0,2  0,3
  // 1,0  1,1  1,2  1,3
  // 2,0  2,1  2,2  2,3

  // 0,m-1  1,m-1  2,m-1  3,m-1  ...  n-1,m-1
  // 0,m-2  1,m-2  2,m-2  3,m-2  ...  n-1,m-2
  // ...
  // 0,0  1,0  2,0  ...  m-1,0
  else if (q === '4') {
    const newMap = [];

    for (let i = m - 1; i >= 0; i--) {
      const line = [];
      for (let j = 0; j < n; j++) {
        line.push(map[j][i]);
      }
      newMap.push(line);
    }

    map = newMap;
    n = map.length;
    m = map[0].length;
  } //
  else {
    const one = [];
    const two = [];
    const three = [];
    const four = [];

    for (let i = 0; i < n; i++) {
      if (i < Math.ceil(n / 2)) {
        one.push(map[i].splice(0, Math.ceil(m / 2)));
        two.push(map[i]);
      } //
      else {
        four.push(map[i].splice(0, Math.ceil(m / 2)));
        three.push(map[i]);
      }
    }

    const newMap = [];

    for (let i = 0; i < n / 2; i++) {
      const line = [];

      if (q === '5') line.push(...four[i], ...one[i]);
      if (q === '6') line.push(...two[i], ...three[i]);

      newMap.push(line);
    }

    for (let i = 0; i < n / 2; i++) {
      const line = [];

      if (q === '5') line.push(...three[i], ...two[i]);
      if (q === '6') line.push(...one[i], ...four[i]);

      newMap.push(line);
    }

    map = newMap;
  }
}

printMap(map);

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));

const [n, m] = inputs.splice(0, 1).flat();

let floors = inputs.map(([l, d]) => {
  if (d === 0) return [1, l, d];
  return [m - l + 1, m, d];
});

// 올라갈 수 있는지 알려주는 애
const isGoUp = (currentFloor) => {
  const [s, e, d] = floors[currentFloor];
  const [nS, nE, nD] = floors[currentFloor + 1];

  if (s - 1 === nE || nS - 1 === e) return true;
  if (nE >= s && nS <= e) return true;

  return false;
};

// 움직여 주는애
const moveStick = () => {
  floors.forEach((floor, i) => {
    let [s, e, d] = floor;
    if (d === 0) {
      if (e === m) floors[i] = [s - 1, e - 1, 1];
      else floors[i] = [s + 1, e + 1, d];
    } else {
      if (s === 1) floors[i] = [s + 1, e + 1, 0];
      else floors[i] = [s - 1, e - 1, d];
    }
  });
};

let current = 0;
let time = 0;
while (current < n - 1) {
  if (isGoUp(current)) {
    current += 1;
    continue;
  }

  // 움직일 수 없다면
  moveStick();
  time += 1;
}

console.log(time);

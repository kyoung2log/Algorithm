const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], ...map] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((it) => it.split(' ').map(Number));
const totalTeam = Array.from({ length: n }, (_, idx) => idx);
let ans = Infinity;

const getTeamStat = (team) => {
  let stat = 0;

  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      if (i === j) continue;

      const s1 = team[i];
      const s2 = team[j];

      stat += map[s1][s2];
    }
  }

  return stat;
};

const bt = (selected, start) => {
  if (selected.length === n / 2) {
    const link = totalTeam.filter((it) => !selected.includes(it));
    const startStat = getTeamStat(selected);
    const linkStat = getTeamStat(link);

    ans = Math.min(ans, Math.abs(startStat - linkStat));
    return;
  }

  for (let i = start; i < n; i++) {
    bt([...selected, i], i + 1);
  }
};

for (let i = 0; i < n / 2; i++) {
  bt([i], i + 1);
}

console.log(ans);

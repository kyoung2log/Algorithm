const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = fs.readFileSync(path).toString().trim().split('\n');
let front = 1;

while (front < inputs.length) {
  const n = inputs[front++];
  const teamNumbers = inputs[front++].split(' ');
  const teamInfo = {};
  const score = [];
  const scoreMap = {};
  let i = 0;

  for (const teamNumber of teamNumbers) {
    teamInfo[teamNumber] = (teamInfo[teamNumber] ?? 0) + 1;
  }

  for (const teamNumber of teamNumbers) {
    if (teamInfo[teamNumber] < 6) continue;
    score.push(teamNumber);
  }

  for (let i = 0; i < score.length; i++) {
    const team = score[i];
    if (scoreMap[team]) scoreMap[team].push(i + 1);
    else scoreMap[team] = [i + 1];
  }

  const ans = [];
  for (const team in scoreMap) {
    const totalScore = scoreMap[team].slice(0, 4).reduce((pre, cur) => pre + cur);
    ans.push([totalScore, scoreMap[team][4], team]);
  }

  ans.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log(ans[0][2]);
}

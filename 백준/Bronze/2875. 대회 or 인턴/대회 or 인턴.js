const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, M, K] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

let team = Math.min(Math.floor(N / 2), M);

while ((N + M - K) < team * 3) {
  team--;
}

console.log(team);

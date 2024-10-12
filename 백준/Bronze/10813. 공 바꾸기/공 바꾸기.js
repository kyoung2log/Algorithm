const [[N,M],...chg] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(v=>v.split(' ').map(Number));
let arr = new Array(N+1).fill(null).map((_,i)=>i);
chg.forEach(v=>{
	const [x,y] = v;
	[arr[x],arr[y]] = [arr[y],arr[x]];
})
console.log(arr.slice(1).join(' '))

function solution(n, arr1, arr2) {
    const ans = []
    
    for(let i = 0 ; i < n ; i ++){
        let line = arr1[i] | arr2[i];
        line = line.toString(2).padStart(n, 0);
        line = line.replaceAll('1', '#');
        line = line.replaceAll('0', ' ');
        ans.push(line);
    }
    
  
    return ans;
}
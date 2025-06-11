function solution(clothes) {
    const clothesBox = {};
    let ans = 1;
    
    for(const [cloth, type] of clothes){
        clothesBox[type] ? clothesBox[type].push(cloth) : clothesBox[type] = [cloth];
    }
    
    for(const type in clothesBox){
        ans *= clothesBox[type].length + 1
    }
    
    return ans - 1;
}
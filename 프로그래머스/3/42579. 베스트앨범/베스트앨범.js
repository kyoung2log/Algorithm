function solution(genres, plays) {
    const genresMap = {};
    const result = [];
    
    for(let i = 0 ; i <  genres.length ; i ++){
        const genre = genres[i];
        const play = plays[i];
        
        if(!genresMap[genre]) genresMap[genre] = [];
        
        genresMap[genre].push([play, i]);
    }
    
    for(const genre in genresMap){
        const len = genresMap[genre].reduce((pre, cur) => pre + cur[0], 0);
        const musics = genresMap[genre].sort((a, b) => b[0] - a[0]).slice(0, 2).map(it => it[1]);
        
        result.push([len, musics]);
    }
    
    const ans = result.sort((a, b) => b[0] - a[0]).map(it => it[1]).flat();

    return ans;
}
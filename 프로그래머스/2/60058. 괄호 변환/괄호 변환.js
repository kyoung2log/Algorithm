const isCorrectString = (string) => {
    const stack = [];
    
    for(const str of string){
        if(str === '(') stack.push('(');
        else {
            if(stack.length  === 0) return false;
            else stack.pop();
        }
    }
    
    return true;
}

const splitString = (string) => {
    const stack = [];
    let startS = string[0];
    
    for(let i = 0 ; i < string.length ; i++){
        if(string[i] === startS) stack.push(string[i]);
        else stack.pop();
        
        if(stack.length === 0){
            return [string.slice(0,i+1), string.slice(i+1)];
        }
    }
    
}

const getParsedU = (u) => {
    let parsedU = ''
    
    for(let i = 1 ; i < u.length-1 ; i ++){
        parsedU += u[i] === '(' ? ')' : '(';
    }
    
    return parsedU;
}


function solution(p) {
    if(p.length === 0 || isCorrectString(p)) return p;
    
    const [u, v] = splitString(p);
    console.log(u, v)
    if(isCorrectString(u)) return u + solution(v);
    
    return '(' + solution(v) + ')' + getParsedU(u);
}

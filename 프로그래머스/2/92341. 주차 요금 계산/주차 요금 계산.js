function getParkingTime(inTime, outTime){
    const [inHH, inMM] = inTime.split(':').map(Number);
    const [outHH, outMM] = outTime.split(':').map(Number)
    const diffTime = outHH*60 + outMM - (inHH*60 + inMM);

    return diffTime;
}

function getTotalFee(time, fees){
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    if(time <= baseTime) return baseFee;
    
    return baseFee + Math.ceil((time-baseTime)/unitTime) * unitFee;
}

function solution(fees, records) {
    const parkingMap = new Map();
    const totalParkintTimeMap = new Map();
    let ans = [];
    
    for(const record of records){
        const [time, number, type] = record.split(' ');
        
        if(type === 'IN') parkingMap.set(number, time);
        else{
            const parkingTime = getParkingTime(parkingMap.get(number), time);
            
            if(totalParkintTimeMap.has(number)) totalParkintTimeMap.set(number, totalParkintTimeMap.get(number) + parkingTime);
            else totalParkintTimeMap.set(number, parkingTime);
            
            parkingMap.delete(number)
        }
    }
    
    for(const [number, time] of parkingMap){
        const parkingTime = getParkingTime(time, '23:59');
        
        if(totalParkintTimeMap.has(number)) totalParkintTimeMap.set(number, totalParkintTimeMap.get(number) + parkingTime);
        else totalParkintTimeMap.set(number, parkingTime)
    }
    
    for(const [number, time] of totalParkintTimeMap){
        const totalFee = getTotalFee(time, fees);
        ans.push([number, totalFee]);
    }

    ans = ans.sort((a, b) => a[0] - b[0]).map(it => it[1]);
    
    return ans;
}
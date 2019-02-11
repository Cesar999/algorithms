function printSums(N){
    let start = 1, end = 1; 
    let sum = 1; 
    let temp = '';
    while (start <= N/2) { 
        if (sum < N) { 
            end += 1; 
            sum += end; 
        } 
        else if (sum > N) { 
            sum -= start; 
            start += 1; 
        } 
        else if (sum == N) { 
            for (let i = start; i <= end; ++i) {
                temp = temp + ` ` + i ; 
            }
            console.log(`${temp} = ${N}`);
            temp = ``;
            sum -= start; 
            start += 1; 
        } 
    } 
}

printSums(100); 

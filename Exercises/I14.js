function numberOfTwo(n){
    let count = 0;
    
    while(n>0){
        if(n%10 === 2){
            count++;
        }
        n = n/10;
        n = Math.floor(n);
    }
    return count;
}

function ocurrences(n){
    let count = 0;
    for(let i=2; i<=n; i++){
        count += numberOfTwo(i);
    }
    console.log(count);
}

ocurrences(22);
ocurrences(100);
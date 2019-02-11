function findPrimes(s,e,N){
    const result = [];
    let isPrime = false;
    for(let i=s; i<=e; i++){
        if(result.length===N){
            console.log(result);
            return;
        }
        if(i<=1){
            continue;
        }
        if(i===2){
            result.push(i);
            continue;
        }
        for(let j=2; j<i; j++){
            if(i%j === 0){
                isPrime = false;
                break;
            }
            isPrime = true;
        }
        if(isPrime){
            result.push(i);
        }
    }
}

findPrimes(1,100,5);
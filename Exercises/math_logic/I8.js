//Find Prime numbers in a range

function findPrimes(s,e){
    const primes = [];
    let isPrime = false;
    for(let i=s; i<=e; i++){
        if (i <= 1) {  
            continue;
        }
        if (i === 2) {  
            primes.push(i);
            continue;
        }
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
            isPrime = true;
        }
        if(isPrime){
            primes.push(i);
        }
    }
    console.log(primes);
}

findPrimes(5,100);
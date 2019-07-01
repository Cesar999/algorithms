// "Given a range of natural numbers from 0 to N, determine the number of 2s that are found in the digits of each of those numbers
// "
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
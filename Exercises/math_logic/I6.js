// /Find the numbers whose digits sum 5 from 1 to 200
function findSum(){
    let n;
    let sum;
    const result = [];
    for(let i=1; i<=200; i++){
        n = i;
        sum = 0;
        while(n>=1){
            sum += n%10;
            n = Math.floor(n/10);
        }
        if(sum===5){
            result.push(i);
        }
    }
    console.log(result);
}

findSum();
// /Find the numbers whose digits sum 'num' from 1 to 'max'
function findSum(num, max){
    let n;
    let sum;
    let result = [];
    for(let i=1; i<=max; i++){
        n = i;
        sum = 0;
        while(n>=1){
            sum += n%10;
            n = Math.floor(n/10);
        }
        if(sum === num){
            result.push(i);
        }
    }
    console.log(result);
}

findSum(7, 200);
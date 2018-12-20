
function fib1(n){
    const result = [0,1];
    for(let i=2; i<=n; i++){
        const a = result[i-1];
        const b = result[i-2];
        result.push(a+b);
    }
    return result[n];    
}


function fib2(n){
    if(n<2){
        return n;
    }
    return fib2(n-1)+fib2(n-2);
}

let n = 5;

console.time("Fib linear");
console.log(fib1(n));
console.timeEnd("Fib linear");

console.time("Fib recursive");
console.log(fib2(n)) ;
console.timeEnd("Fib recursive");
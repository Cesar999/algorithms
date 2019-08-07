
function fibbonacci(n){
    let a = 0;
    let b = 1;
    if(n===0){return a};
    if(n===1){return b};
    let temp;
    for(let i=2; i<=n; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    console.log(temp);
}

fibbonacci(6);
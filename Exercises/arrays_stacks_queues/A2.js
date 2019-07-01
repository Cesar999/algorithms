//Display the numbers from 1 to 100 without using loops/conditionals
let arr = [];
arr[0] = p1to100;
arr[1] = ()=>{console.log(1);};

function p1to100(n){
    console.log(n);
    n--;
    arr[Math.floor(1/(n))](n);
}

p1to100(10);
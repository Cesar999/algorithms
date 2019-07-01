//Given two arrays of single-digit numbers, create a function that will add them and produce the result in the same format as the inputs. Example: a = [9,9], b=[1] so o = [1,0,0]

function addArrays(a,b){
    let temp1 = 0;
    for(let i=a.length-1; i>=0; i--){
        temp1 += a[i]*Math.pow(10,a.length-1-i);
    }

    let temp2 = 0;
    for(let j=b.length-1; j>=0; j--){
        temp2 += b[j]*Math.pow(10,b.length-1-j);
    }

    let n = temp2 + temp1;
    let arr = [];

    while(n>=1){
        arr.unshift(Math.floor(n%10));
        n=n/10;
    }

    if(arr.length===0){
        arr.push(0);
    }

    console.log(arr);
}

let a = [1,6,7];
let b = [5,1,4];
addArrays(a,b);

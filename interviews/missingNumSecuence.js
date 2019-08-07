
function findindMissingNumber(arr){
    const n = arr.length+1;
    let total = n*(n+1)/2;
    let sum = 0;
    for(let i = 0; i<n-1; i++){
       sum += arr[i];
    }
    console.log(total - sum);
}

const arr = [1,2,3,4,5,6,8,9];
findindMissingNumber(arr);
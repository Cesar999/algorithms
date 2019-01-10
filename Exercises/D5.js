function findMissingNo(arr){
    const n = arr.length;
    let total = (n+1)*(n+2)/2;
    for(i=0; i<n; i++){
        total-=arr[i];
    }
    console.log(total);
}

const arr = [1,2,3,4,5,6,8,9];
findMissingNo(arr);
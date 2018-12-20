function binary_search(arr, elem){
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end)/2);
    while(arr[middle] !== elem){
        if(start===end){
            return -1;
        }
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    return middle;
}

const x = binary_search([2,5,6,9,13,15,28,30],9);
console.log(x);
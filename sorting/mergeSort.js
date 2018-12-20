arr = [8,4,9,6,1,2,5,7,3,0];

function merge(left, right){
    const results = [];
    console.log(left, right);
    while(left.length&&right.length){
        if(left[0] < right [0]){
            results.push(left.shift());
        }else{
            results.push(right.shift());
        }
    }
    return [...results,...left,...right];
}

function mergeSort(arr){
    if(arr.length ===1){
        return arr;
    }

    const center = Math.floor(arr.length/2);
    const left = arr.slice(0,center);
    const right = arr.slice(center);
    return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort(arr));

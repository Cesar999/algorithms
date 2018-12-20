function quickSort(arr, start, end){
    let pivot = arr[start];
    let swap_idx = start;
    for(let i=start+1; i<=end; i++){
        if(arr[i]<pivot){
            swap_idx++;
            [arr[i],arr[swap_idx]]=[arr[swap_idx],arr[i]];
            console.log(arr, i , swap_idx);
        }
    }
    [arr[swap_idx],arr[start]]=[arr[start],arr[swap_idx]];
    if(swap_idx>start){
        quickSort(arr, start, swap_idx-1);
    }
    if(swap_idx<end){
        quickSort(arr, swap_idx+1, end);
    }
    return arr;
}

const arr = [10, 7, 12, 6, 3, 2, 8];
//const arr = [8,4,9,6,1,2,5,7,3,0];
console.log(arr);
let n = arr.length;
console.log(quickSort(arr, 0, n-1));

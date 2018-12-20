function quickSort(arr, low, high){
    // let m = Math.floor((high-low)/2)+low;
    // [arr[high],arr[m]]=[arr[m],arr[high]];
    // console.log(arr);
    let pivot = arr[high];
    let count = low;
    for(let i = low; i<high; i++){
        if(arr[i]<=pivot){
            [arr[i],arr[count]]=[arr[count],arr[i]];
            console.log(arr, i, count);
            count++;
        }
    }

    [arr[high],arr[count]]=[arr[count],arr[high]];
    
    if(count>low){
        quickSort(arr, low, count-1);
    }
    if(count<high){
        quickSort(arr, count+1, high);
    }

    return arr;
}

const arr = [10, 7, 12, 6, 3, 2, 8];
//const arr = [8,4,9,6,1,2,5,7,3,0];
console.log(arr);
let n = arr.length;
console.log(quickSort(arr, 0, n-1));

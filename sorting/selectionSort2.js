function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min_idx = i;
        for(let j=i+1; j<arr.length; j++){
            console.log(arr[j]);
            if(arr[j]<arr[min_idx]){
               min_idx = j;
            }
        }
        if(i!==min_idx){
            [arr[min_idx],arr[i]]=[arr[i],arr[min_idx]];
        }
    }
    return arr;
}

// arr = [8,4,9,6,1,2,5,7,3,0];
const arr = [5,3,1,4,6,2];
console.log(selectionSort(arr));
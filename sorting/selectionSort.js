// arr = [8,4,9,6,1,2,5,7,3,0];
arr = [5,3,1,4,6,2];
function selectionSort(arr){
    for (let i=0; i<arr.length-1; i++) {
        min_idx = i;
        for (let j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[min_idx]){
                min_idx = j;
            }
        }
        let temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
        console.log(arr, i);
    }
    return arr;
}
console.log(arr);
console.log(selectionSort(arr));
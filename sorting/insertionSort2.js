function insertionSort(arr) {
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        let j = i - 1;
        while( j >= 0 && arr[j] > currentVal) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentVal;
    }
    console.log(arr);
}

// arr = [8,4,9,6,1,2,5,7,3,0];
const arr = [5,3,1,4,6,2];
insertionSort(arr); 
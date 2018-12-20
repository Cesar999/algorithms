// arr = [8,4,9,6,1,2,5,7,3,0];
 arr = [5,3,1,4,0,2];

function insertionSort(arr) {
    console.log(arr);

    let n = arr.length; 
    for (let i=1; i<n; ++i) { 
        let key = arr[i]; 
        let j = i-1; 
        while (j>=0 && arr[j] > key) { 
            arr[j+1] = arr[j]; 
            j = j-1; 
        } 
        arr[j+1] = key; 
    } 
    console.log(arr);
}

insertionSort(arr); 
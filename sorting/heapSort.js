function heapify(arr, idx, n) {
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;
    let max = idx;

    if (left < n && arr[left] > arr[max]) {max = left;}

    if (right < n && arr[right] > arr[max]){max = right;}

    if (max != idx) {
        [arr[idx],arr[max]]= [arr[max],arr[idx]];
        // console.log(arr);
        heapify(arr, max, n);
    }
}

function heapSort(arr) {
    console.log(arr);
    let n = arr.length;
    for (let i = Math.floor(n / 2)-1; i >= 0; i--){
        heapify(arr, i, n);
      }

    for (let j = n - 1; j > 0; j--) {
        [arr[0],arr[j]]= [arr[j],arr[0]];
        n--;
        heapify(arr, 0, n);
    }
    console.log(arr);
}

const arr = [8,4,9,6,1,2,5,7,3,0];
// const arr = [4, 10, 3, 5, 1];
//const arr = [6,2,5,4,3,1,0];
heapSort(arr);

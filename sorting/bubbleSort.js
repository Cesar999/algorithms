// arr = [8,4,9,6,1,2,5,7,3,0];
arr = [5,3,1,4,0,2];
var swapped;
console.log(arr, 'i j');
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        swapped = false;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
                swapped = true;
                console.log(arr, i, j);
            }
        }
        if (swapped == false) {
            console.log('Break', i,);
            break; 
        }
    }
    return arr;
}

console.log(bubbleSort(arr));
function mergeArrays(arr1, arr2){
    let i = arr1.length-1;
    let j = arr2.length-1;
    let k = i+j+1;
    while(k>=0){
        if(arr1[i]>arr2[j] && i>=0){
            arr1[k]=arr1[i];
            i--;
            k--;
        } else {
            arr1[k]=arr2[j];
            j--;
            k--;
        }
    }
    console.log(arr1);
}

const arr1 = [1,2,4,5,8];
const arr2 = [0,3,6,7,9];
console.log(arr1,arr2);
mergeArrays(arr1,arr2);
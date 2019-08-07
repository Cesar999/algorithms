//Merge two sorted arrays 
function mergeArrays(arr1, arr2){
    let klength = arr1.length+arr2.length;
    let k = 0;
    let i = 0;
    let j = 0;
    let temp = [];
    while(k<klength){
        if(arr1[i]<arr2[j]){
            temp.push(arr1[i]);
            i++;
            k++;
        } else if(arr1[i]>=arr2[j]){
            temp.push(arr2[j]);
            j++;
            k++;
        } else {
            if(i<arr1.length){
                temp.push(arr1[i]);
                i++;
            } else {
                temp.push(arr2[j]);
                j++;
            }
            k++;
        }
    }
    console.log(temp);
}

const arr1 = [1,2,4,5,8];
const arr2 = [0,3,6,7,9];
console.log(arr1,arr2);
mergeArrays(arr1,arr2);
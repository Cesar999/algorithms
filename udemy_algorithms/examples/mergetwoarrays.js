const array1 = [0, 3, 4, 7, 9];
const array2 = [1, 2, 5, 6, 8];

function mergeArrays(arr1, arr2){
    let left = 0;
    let right = 0;
    const output = [];
    while(left<arr1.length || right<arr2.length){
        if(left===arr1.length){
            output.push(...arr2.slice(right));
            break;
        }
        if(right===arr2.length){
            output.push(...arr1.slice(left));
            break;
        }
        if(arr1[left]<arr2[right]){
            output.push(arr1[left]);
            left++;
        } else{
            output.push(arr2[right]);
            right++;
        }
    }
    return output;
}

const res = mergeArrays(array1, array2);
console.log(res);
// while(i < arr1.length) {
//     results.push(arr1[i])
//     i++;
// }
// while(j < arr2.length) {
//     results.push(arr2[j])
//     j++;
// }

function merge(left, right){
    let result = [];
    let l = 0;
    let r = 0;
    while(l<left.length&&r<right.length){
        if(left[l]<right[r]){
            result.push(left[l]);
            l++;
        } else {
            result.push(right[r]);
            r++;
        }
    }
    return [...result,...left.slice(l),...right.slice(r)];
}

function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }

    let center = Math.floor(arr.length/2);
    let left = arr.slice(0,center);
    let right = arr.slice(center);
    console.log(left, right);
    return merge(mergeSort(left),mergeSort(right));
}

const arr = [8,4,9,6,1,2,5,7,3,0];
console.log(mergeSort(arr));
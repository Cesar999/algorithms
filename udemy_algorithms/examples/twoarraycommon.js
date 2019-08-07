// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function common(arr1, arr2){
    for(let item of arr1){
        if(arr2.includes(item)){
            return true;
        }
    }
    return false;
}


const flag = common(array1, array2);
console.log(flag);

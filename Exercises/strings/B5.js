//Determine if a string is a permutation of another.

function arePermutation(str1, str2){
    let temp = false;
    let arr1 = str1.split("").sort().join("");
    let arr2 = str2.split("").sort().join("");
    console.log(arr1, arr2);
    if(arr1 === arr2){
        temp = true;
    }
    return temp;
}
const str1 = `abcd`;
const str2 = `dcba`;
console.log(arePermutation(str1, str2)?`Yes`:`No`);
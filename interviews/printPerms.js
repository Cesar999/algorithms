// //given string ABC, print all the permutations
function printPermutations(str, idx=0) {
    //console.log(str, idx);
    if(idx === str.length){
        console.log(str);
        return;
    } else {
        let arr = str.split('');
        for(let i=idx; i<arr.length; i++){
            [arr[i], arr[idx]]=[arr[idx], arr[i]];
            printPermutations(arr.join(''), idx+1);
            [arr[i], arr[idx]]=[arr[idx], arr[i]];
        }
    }
}
printPermutations('ABC');

// // //given string ABC, print all the permutations
// function printPermutations(str, idx=0) {
//     let result = '';
//     if(idx === str.length){
//         return str+' ';
//     } else {
//         let arr = str.split('');
//         for(let i=idx; i<arr.length; i++){
//             [arr[i], arr[idx]]=[arr[idx], arr[i]];
//             const temp = printPermutations(arr.join(''), idx+1);
//             [arr[i], arr[idx]]=[arr[idx], arr[i]];
//             result = result+temp; 
//         }
//         return result;
//     }
// }
// console.log(printPermutations('ABC'));
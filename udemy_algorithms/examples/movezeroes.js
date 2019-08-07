// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeros(nums){
    let count = 0;
    let output = Array.from({length: nums.length}, () => 0);
    for(let num of nums){
        if(num!==0){
            output[count++]=num;
        } 
    }
    return output;
}

const res = moveZeros([0,1,0,3,12]);
console.log(res);

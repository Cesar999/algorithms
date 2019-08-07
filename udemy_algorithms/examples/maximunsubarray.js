
function maxSubArray(nums) {
    let maxSum = 0;
    let partialSum = 0;

    for(let item of nums){
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum<0) {partialSum = 0;}
    }
    return maxSum;
};

const res = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
console.log(res); //[4,-1,2,1] has the largest sum = 6.
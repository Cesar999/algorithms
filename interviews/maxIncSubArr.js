const examples = [
    [1, 2, 3, 4],              // 4
    [3, 5, 2, 4, 5],           // 3
    [2, 3, 4, 6, 9, 10, 1, 2], // 6
    [1, 2, 3, -1, 4, 5, 6]     // 4
];

for(let arr of examples){
    console.log(maxIncSubArr(arr));
}

function maxIncSubArr(arr){
    let len = 1;
    let max = 1;

    for(let i=1; i<arr.length; i++){
        if(arr[i]>arr[i-1]){
            len++;
        } else {
            len = 1;
        }

        if(len > max){
            max = len;
        }
    }

    return max;
}
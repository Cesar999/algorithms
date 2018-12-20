function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getNumDigits(num){
    if (num === 0) {return 1};
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

function getMaxDigit(arr){
    let maxnum = 0;
    for(let i=0; i<arr.length; i++){
        maxnum = Math.max(maxnum, getNumDigits(arr[i]));
    }
    return maxnum;
}

function radixSort(arr){
    let maxDigits = getMaxDigit(arr);
    for(let i=0; i<maxDigits; i++){
        let digitsArray = Array.from({length:10},()=>[]);
        for(let j=0; j<arr.length; j++){
            let digit = getDigit(arr[j],i);
            digitsArray[digit].push(arr[j]);
        }
        arr = [].concat(...digitsArray);
    }
    return arr;
}

const arr = [666, 9, 1510, 2018, 4, 999, 26];
let temp = radixSort(arr);
console.log(temp);

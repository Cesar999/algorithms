//Find the 2nd largest number

const arr = [20,7,19,3,9,10,2,11,1,12,7,13,6,14,8,15,5,16,17,4,18];

let largest = 0;
let second = 0;
for(let i=0; i<arr.length; i++){
    if(largest<arr[i]){
        second = largest;
        largest = arr[i];
    } else if(second<arr[i] && arr[i]!==largest){
        second = arr[i];
    }
}
console.log(largest,second);
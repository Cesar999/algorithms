//Given an array with values ranging from 0 to n-1, swap each array location with the value on the nth position with a[a[n]]

function swapFunc(arr){
    let temp;
    for(let i=0; i<arr.length; i++){
       temp = arr[arr[i]];
       arr[arr[i]]=arr[i];
       arr[i] = temp;
    }
    console.log(arr);
}

let arr = [5,1,0,3,2,4];
swapFunc(arr);
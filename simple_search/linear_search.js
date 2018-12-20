function linearSearch(arr, val){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===val){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([7,3,9,2,5,1,0],8));
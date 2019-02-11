function bubbleSort(arr){
    let swap;
    for(let i=arr.length-1; i>0;i--){
        swap = false;
        
        for(let j=0; j < i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swap = true;
            }
        }
        if(!swap){return arr;}
    }
    return arr;
}

//const arr = [8,4,9,6,1,2,5,7,3,0];
const arr = [5,3,1,4,0,2];
const sorted = bubbleSort(arr);
console.log(sorted);
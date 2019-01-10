const arr = [20,7,19,3,9,10,2,11,1,12,7,13,6,14,8,15,5,16,17,4,18];

function kth_largest(arr,k){
    if(k===0){
        return;
    }
    let swap;
    for(let i=k; i>0;i--){
        swap = false;
        for(let j=0; j < arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                swap = true;
            }
        }
        if(!swap){return arr[arr.length-k];}
    }
    return arr[arr.length-k];
}

const kth = kth_largest(arr,5);
console.log(kth);
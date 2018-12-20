arr = [8,4,9,6,1,2,5,7,3,0,10];
let c = 0;
let temp = 0;

function findMax(arr) {
    if(temp<arr[c]){
        temp = arr[c];
    }
    c++;
    if(c>=arr.length){
        console.log(temp);
    }
    else {
        findMax(arr);
    }
    
}

findMax(arr);
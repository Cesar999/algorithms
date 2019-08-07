// /[1 , 4, 5, 7] //9

function arraySumN(arr, n){
    //Assuming is sorted
    let map = {};
    let item;
    for(let i=0; i<arr.length; i++){
        item = arr[i];
        if(!map[item]){
            map[item] = i;
        }
    }

    let temp;
    for(let item of arr){
        temp = n - item;
        if(map[temp]>=0){
            console.log([map[item], map[temp]]);
            return [map[item], map[temp]];
        }
    }

    return [-1, -1];
}

arraySumN([1, 2, 4, 6, 7, 2, 3, 1, 5, 7], 9);

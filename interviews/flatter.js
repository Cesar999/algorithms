const data = [ 1, [ 2, 3 ], [4, [ 5, [ 6, 7 ], 8 ], 9] ];

function flatter(arr){
    const flat = [];
    for(let item of arr){
        if(Array.isArray(item)){
            flat.push(...flatter(item));
        } else {
            flat.push(item);
        }
    }
    return flat;
}

console.log(flatter(data));
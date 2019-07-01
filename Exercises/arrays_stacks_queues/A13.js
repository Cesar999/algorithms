//Flatten an array, Recursive and iterative implementation

const data = [ 1, [ 2, 3 ], [4, [ 5, [ 6, 7 ], 8 ], 9] ];

function flatten_Recursive(arr){
    const flat = [];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            flat.push(...flatten_Recursive(arr[i]));
        } else {
            flat.push(arr[i]);
        }
    }
    return flat;
}

function flatten_Iterative(arr) {
    let flat = [];
    while(arr.length) {
        let value = arr.shift();
        console.log(value,'value');
        if(Array.isArray(value)) {
            arr.unshift(...value);
            console.log(arr,'arr');
        } else {
            flat.push(value);
        }
    }
    return flat;
}  

console.log(flatten_Recursive(data),'Recursive');
console.log(flatten_Iterative(data),'Iterative');
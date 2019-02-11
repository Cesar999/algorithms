function getOddOccurrence(arr) { 
    const arr_size = arr.length;
    const result = [];
    for (let i = 0; i < arr_size; i++) { 
        let count = 0; 
        for (let j = 0; j < arr_size; j++) { 
            if (arr[i] == arr[j]) 
                count++; 
        } 
        if (count % 2 != 0){
            if(result.indexOf(arr[i])===-1){
                result.push(arr[i]);
            }
        }   
    } 

    console.log(result);
} 

function getOddOccurrence2(arr){
    const obj = {};
    const result = [];
    for(let i = 0; i < arr.length; i++) { 
        if(obj[arr[i]]===undefined){
            obj[arr[i]] = 1;
        } else{
            obj[arr[i]] += 1;
        }
    } 

    for(let prop in obj) { 
        if(obj[prop] % 2 != 0){
            result.push(Number(prop)); 
        }
            
    }
    
    console.log(result);
}

const arr = [1,1,2,2,2,3,3,4,4,5,5,5,5,5,6,6,7,7,7,7,8,8,8,8,8,8,8,8,8];
//---------------------------------
console.time("Nested For");
getOddOccurrence(arr);
console.timeEnd("Nested For");
//---------------------------------
console.time("Hash");
getOddOccurrence2(arr);
console.timeEnd("Hash");
//---------------------------------
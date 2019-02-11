function findMajority(arr){
    const map = new Map();
    for(let i = 0; i < arr.length; i++) { 
        if (map.has(arr[i])) { 
                let count = map.get(arr[i])+1; 
                if (count > arr.length / 2) { 
                    console.log("Majority found : " + arr[i]); 
                    return; 
                } else{
                    map.set(arr[i], count); 
                }
        } 
        else{
            map.set(arr[i],1); 
        } 
    } 
    console.log(" No Majority element"); 
    console.log(map);
}

const arr = [9,1,9,6,9,3,9,0,9];
findMajority(arr);
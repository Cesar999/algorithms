function reverse(arr, k) { 
    let n = arr.length;
    for (let i = 0; i < n; i += k){
        let left = i; 
        let right = Math.min(i + k - 1, n - 1); 
        let temp; 
        
        while (left < right) { 
            [arr[left],arr[right]]=[arr[right],arr[left]];
            left+=1; 
            right-=1; 
        } 
    } 
    console.log(arr);
} 

let arr = [1, 2, 3, 4, 5, 6, 7, 8]; 
let k = 3; 

reverse(arr, k);
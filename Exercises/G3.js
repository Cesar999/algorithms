function countSetBits(a,b) { 
    let n = a ^ b; //XOR 
    let count = 0; 
    while (n !== 0) { 
        count += n & 1; 
        n >>= 1; 
    } 
    console.log(count);
    return count; 
} 

let a = 10; 
let b = 20; 
console.log(a.toString(2),b.toString(2));
countSetBits(a, b);

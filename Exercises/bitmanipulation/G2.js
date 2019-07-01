// Given x, find y that is min |x-y|, y has the same number of set bits as x and y!=x

// function minimize(x) { 
//     let cx= 0; 
//     let cy = 0; 
//     let temp = x;

//     while (x > 0) { 
//         cx += x & 1; 
//         x >>= 1; 
//     } 

//     let y = temp;
//     while(y > 0){
//         y--;
//         while (temp > 0) { 
//             cy += temp & 1; 
//             temp >>= 1; 
//         } 
        
//         if(cy === cx){
//             return y;
//         } else {
//             cy = 0;
//             temp = y;
//         }
//     }
//     return -1;
// } 

function minimize(x){
    let temp = x; 
    let c0 = 0; 
    let c1 = 0; 
  
    while ((temp & 1) == 1) { 
        c1++; 
        temp = temp >> 1; 
    } 
  
    if (temp == 0) {
        return -1;
    }
  
    while (((temp & 1) == 0) && (temp!= 0)) { 
        c0++; 
        temp  = temp >> 1; 
    } 
  
    return x - (1 << c1) - (1 << (c0 - 1)) + 1; 
}
const x = 10; //1010
console.log(minimize(x)); //1001
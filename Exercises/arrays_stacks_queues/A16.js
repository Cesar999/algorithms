//Given an array of numbers of length N, find the index of that array that balances the left and right sum.

function equilibrium(arr) {
    let n = arr.length; 
    let sum = 0; // initialize sum of whole array 
    let leftsum = 0; // initialize leftsum 

    /* Find sum of the whole array */
    for (let i = 0; i < n; ++i) {
        sum += arr[i];
    }
         
    for (let i = 0; i < n; ++i) { 
        sum -= arr[i]; // sum is now right sum for index i 
        if (leftsum === sum) {
            return `Equilibium index: ${i}`; 
        }
        leftsum += arr[i]; 
    } 

    /* If no equilibrium index found, then return 0 */
    return `No Equilibium index Found`; 
} 

const arr = [ -7, 1, 5, 2, -4, 3, 0 ]; 
console.log(equilibrium(arr));
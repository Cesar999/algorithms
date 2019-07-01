//Given the start and end position of an NxM matrix, find all possible routes from start to end given the only valid movements of right or down.

function numberOfPaths(m, n) { 
    const count = Array.from(Array(m),()=>Array(n).fill(1));
    console.log(count);
    for (let i = 1; i < m; i++) { 
        for (let j = 1; j < n; j++) {
            count[i][j] = count[i-1][j] + count[i][j-1]; 
            console.log(count);
        }
    } 
    return count[m-1][n-1]; 
} 

console.log(numberOfPaths(3,3));
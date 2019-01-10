function search(mat, x) { 
    n = mat.length;
    let i = 0, j = n-1; 
    while ( i < n && j >= 0 ) { 
        if ( mat[i][j] == x ) { 
            console.log(`${x} found at i=${i} j=${j}`); 
            return; 
        } 
        if ( mat[i][j] > x ) {
            j--; 
        }
        else {
            i++;
        }
    } 

    console.log("Element not found"); 
    return;
} 

const mat = 
        [[10, 20, 30, 40], 
         [15, 25, 35, 45], 
         [27, 29, 37, 48], 
         [32, 33, 39, 50] ]; 

search(mat,39);
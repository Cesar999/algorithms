function modifyMatrix(mat) {
    let R = mat.length;
    let C = mat[0].length; 
    let row = new Array(R).fill(1); 
    let col = new Array(C).fill(1); 
    let i, j; 
  
    /* Store the rows and columns to be marked as 
    1 in row[] and col[] arrays respectively */
    for (i = 0; i < R; i++) { 
        for (j = 0; j < C; j++) { 
            if (mat[i][j] == 0) { 
                row[i] = 0; 
                col[j] = 0; 
            } 
        } 
    } 

    /* Modify the input matrix mat[] using the 
    above constructed row[] and col[] arrays */
    for (i = 0; i < R; i++) { 
        for (j = 0; j < C; j++) { 
            if ( row[i] == 0 || col[j] == 0 ) { 
                mat[i][j] = 0; 
            } 
        } 
    } 
} 

function printMatrix(mat) { 
    let R = mat.length;
    let C = mat[0].length; 
    let i, j; 
    let temp = '';
    for (i = 0; i < R; i++) { 
        for (j = 0; j < C; j++) { 
           temp =  temp + ' ' + mat[i][j]; 
        } 
        console.log(temp); 
        temp='';
    } 
} 

let mat = [ 
[0, 1, 1, 0], 
[1, 1, 1, 1], 
[1, 1, 1, 1]]; 

console.log("Matrix Intially"); 
printMatrix(mat); 
modifyMatrix(mat); 
console.log("Matrix after modification n"); 
printMatrix(mat); 

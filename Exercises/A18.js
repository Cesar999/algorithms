const sparseMatrix = 
[
    [0 , 0 , 3 , 0 , 4 ], 
    [0 , 0 , 5 , 7 , 0 ], 
    [0 , 0 , 0 , 0 , 0 ], 
    [0 , 2 , 6 , 0 , 0 ] 
]; 

function compressMatrix(sparseMatrix){
    let r = sparseMatrix.length;
    let c = sparseMatrix[0].length;
    
    let size = 0; 
    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 5; j++) {
            if (sparseMatrix[i][j] != 0){
                size++; 
            }
        }   
    }
    
    const compactMatrix = Array.from(Array(3),()=>Array(size)); 
      
    let k = 0; 
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (sparseMatrix[i][j] != 0) { 
                compactMatrix[0][k] = i; 
                compactMatrix[1][k] = j; 
                compactMatrix[2][k] = sparseMatrix[i][j]; 
                k++; 
            } 
        }
    }
    
    console.log(compactMatrix);
}

compressMatrix(sparseMatrix);

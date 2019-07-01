 //Rotate Matrix to 90 degree toward Right(clockwise)
function rotateMatrix90(matrix) {
    let rows = matrix.length; //Total rows of Original Matrix
    let cols = matrix[0].length; //Total columns of Original Matrix
    let rotatedMatrix = Array.from(Array(cols),()=>Array(rows));
    for (let i = 0; i < rows; i++) {
     for (let j = 0; j < cols; j++) {
      rotatedMatrix[j][(rows-1)- i] = matrix[i][j]; 
     }
    }
    console.log(rotatedMatrix);
}

function rotateMatrix_90(matrix) {
    let rows = matrix.length; //Total rows of Original Matrix
    let cols = matrix[0].length; //Total columns of Original Matrix
   
    const rotatedMatrix = Array.from(Array(cols),()=>Array(rows));
   
    for (let i = 0; i < rows; i++) {
     for (let j = 0; j < cols; j++) {
        rotatedMatrix[(cols-1)- j][i] = matrix[i][j]; 
     }
    }
    console.log(rotatedMatrix);
   }

    
const arr = 
[[1,2,3],
 [4,5,6],
 [7,8,9],
 [0,0,0]];
console.log(arr);
rotateMatrix90(arr);
rotateMatrix_90(arr);
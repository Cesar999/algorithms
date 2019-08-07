// Input:
// 1    2   3   4
// 5    6   7   8
// 9   10  11  12
// 13  14  15  16
// Output: 
// 1 5 9 13 14 15 16 12 8 4 3 2 6 10 11 7 

const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

spiralMatrix(arr);

function spiralMatrix(matrix){
    let rowStart = 0;
    let rowEnd = matrix.length-1;
    let colStart = 0;
    let colEnd = matrix[0].length-1;
    const res = [];

    while(rowStart<rowEnd && colStart<colEnd){
        for(let i=rowStart; i<=rowEnd; i++){
            res.push(matrix[i][colStart]); //anti-clock
            //res.push(matrix[colStart][i]); //clockwise
        }
        colStart++;
    
        for(let i=colStart; i<=colEnd; i++){
            res.push(matrix[rowEnd][i]); //anti-clock
            //res.push(matrix[i][rowEnd]); //clockwise
        }
        rowEnd--;
        
        for(let i=rowEnd; i>=rowStart; i--){
            res.push(matrix[i][colEnd]); //anti-clock
            //res.push(matrix[colEnd][i]); //clockwise
        }
        colEnd--;
    
        for(let i=colEnd; i>=colStart; i--){
            res.push(matrix[rowStart][i]); //anti-clock
            //res.push(matrix[i][rowStart]); //clockwise
        }
        rowStart++;
    }

    console.log(res);
}

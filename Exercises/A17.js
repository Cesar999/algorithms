const mat1 = [[1,0,0,0],[2,3,0,0],[4,5,6,0],[7,8,9,10]];
const mat2 = [[1,2,3,4],[0,5,6,7],[0,0,8,9],[0,0,0,10]];

function mat_Lower(mat){
    let n = mat.length;
    let arr_lower = Array(size(n));
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            arr_lower[index_lower(i,j)]=mat[i][j];
        }
    }
    console.log(arr_lower,'Lower');
}   

function index_lower(r,c){
    return (r+1)*(r)/2 + c;
}


function mat_Upper(mat){
    let n = mat.length;
    let arr_upper = Array(size(n));
    for(let i=0; i<n; i++){
        for(let j=i; j<n; j++){
            arr_upper[index_upper(i,j)]=mat[i][j];
        }
    }
    console.log(arr_upper,'Upper');
}   

function index_upper(r,c){
    return (c+1)*(c)/2 + r;
}


function size(n){
    return n*(n+1)/2;
}

mat_Lower(mat1);
mat_Upper(mat2);
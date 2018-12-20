const Stack = require('../stacks');

//const matrix = [[0,1,1,0],[1,1,1,1],[1,1,1,1],[1,1,0,0]];
const matrix = [[0,1,1,0],[1,1,0,1],[0,1,1,1],[1,1,1,1]];

printMatrix(matrix);
console.log('------');
findMaxRectangle(matrix);

//----------------

function printMatrix(matrix){
    for (let i=0; i<matrix.length; i++){
        console.log(matrix[i]);
    }
}

function findMaxRectangle(matrix){
    let temp = matrix[0];
    let max_area = 0;

    for (let row=0; row<matrix.length; row++){
        arr = matrix[row];
        temp = createHistogram(matrix[row],row,temp);
        console.log('histogram: ',temp, );
        //max_area = Math.max(max_area, findMaxArea(temp));
        max_area = Math.max(max_area, findMaxAreaStack(temp));
        
    }
    console.log('Max area: ',max_area);
}


function createHistogram(row,idx,temp){
    if(idx===0){
        return row;
    }
    let result = [];
    for (let i=0; i<temp.length; i++){
        if(row[i]==0){
            result[i]=0;
        }
        else {
            result[i]=row[i]+temp[i];
        }
    }
    return result;
}

function findMaxArea(hist){
    let maxArea = 0;

    for (let i = 0; i < hist.length; ++i) {
        let h = hist[i];
        maxArea = Math.max(maxArea, h);
        for (let j = i - 1; j >= 0; --j) {
            let w = (i - j + 1);
            h = Math.min(h, hist[j]);
            maxArea = Math.max(maxArea, h * w);
        }
        //console.log('--------');
    }
    return maxArea;
}

function findMaxAreaStack(hist){
    stack = new Stack();
    let top_val;
    let max_area = 0;
    let area = 0;
    let i = 0;

    while (i < hist.length) {
        if(stack.isEmpty() || hist[stack.peek()]<=hist[i]){
            stack.push(i++);
        } else {
            top_val = hist[stack.peek()];
            stack.pop();
            area = top_val*i;
            if(!stack.isEmpty()){
                area = top_val*(i-stack.peek()-1);
            }
            max_area = Math.max(area, max_area); 
        }
    }

    while(!stack.isEmpty()){
        top_val = hist[stack.peek()];
        stack.pop();
        area = top_val*i;
        if(!stack.isEmpty()){
            area = top_val*(i-stack.peek()-1);
        }
        max_area = Math.max(area, max_area); 
    }

     return max_area;
}


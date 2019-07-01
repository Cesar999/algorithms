//	1, 2, 4, 5, 8, 10, 16, 20, 25, 32, 40, 50, 64, 80, 100, 125, 128, 160, 200, 250, 256, 320, 400

//Generate the next numbers in the series 1, 2, 4, 5, 8, 10, 16,...

function getPattern(n){
    const result = [];
    let count = 0;
    let mem;
    let i = 0;
    let j = 0;

    while(count<n){
            if(j==0&&i==0){
                temp = Math.pow(2,i)*Math.pow(5,j);
                count++;
                result.push(temp);
            }
            if(j==0){
                mem = i;
            }
            if(i>1){
                j++;
                i--;
                i--;
                temp = Math.pow(2,i)*Math.pow(5,j);
            } else {
                i = mem + 1;
                j = 0;
                temp = Math.pow(2,i)*Math.pow(5,j);
            }
            count++;
            result.push(temp);
        }
        
        if(count>=n){
            console.log(result);
            return;
        }
    
}
getPattern(17);

// 1 2 4 5 8 10 16 20 25 32 40 50 64 80 100 125 128



const strA = 'catdogmouse';
const strB = 'mousecheesetrap';

// const strA = 'abcdaf';
// const strB = 'xbcdf';
maxCommonSubstr(strA, strB);

function maxCommonSubstr(str1, str2){
    const matrix = Array.from({length: str1.length}, ()=>Array.from({length: str2.length},()=>0));
    let maxSubStrLength = 0;
    let endIndex = 0;

    for(let i=0; i<str1.length; i++){
        for(let j=0; j<str2.length; j++){
            let chari = str1[i];
            let charj = str2[j];

            if(chari === charj){
                if(i>0 && j>0){
                    matrix[i][j] = matrix[i-1][j-1] + 1;
                } else {
                    matrix[i][j] = 1;
                }
            }

            if(maxSubStrLength < matrix[i][j]){
                maxSubStrLength = matrix[i][j];
                endIndex = i;
            }
        }
    }
    const res = str1.slice(endIndex-maxSubStrLength+1, endIndex+1)
    console.log(res);
    return res;

}



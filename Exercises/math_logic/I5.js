// Find the nth element in the series: 3, 5, 6, 9, 10, 12, 17, 18, 20, 24, ... (two bit series)
function getNth(n){
    const result = [];
    let i = 0;
    let count = 0;
    while(i<n){
        minor =Math.pow(2,i);
        let k = 0;
        for(let j=1; j<Math.pow(2,i); j=Math.pow(2,k)){
            console.log(j, minor)
            result.push(minor+j);
            k++;
            count++;
            if(count>=n){
                console.log(result);  
                return;
            }
        }
        i++;
    }
    console.log(result);    
}
getNth(6);
// 6 - 21
// 5 - 15
// 4 = 10
// 3 = 6

// 1 + 2 = 3
// 1 + 4 = 5
// 2 + 4 = 6
// 1 + 8 = 9
// 2 + 8 = 10
// 4 + 8 = 12
// 1 + 16 = 17
// 2 + 16 = 18
// 4 + 16 = 20
// 8 + 16 = 24
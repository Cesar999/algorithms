// 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
// //2
// 1, ,3, ,5, ,7, ,9,  ,11,  ,13,  ,15,  ,17,  ,19,  ,21,  ,23,  ,25,  ,27,  ,29,  
// //3
// 1, ,3, , , ,7, ,9,  ,  ,  ,13,  ,15,  ,  ,  ,19,  ,21,  ,  ,  ,25,  ,27,  ,  ,
// //5
// 1, ,3, , , ,7, ,9,  ,  ,  ,  ,  ,15,  ,  ,  ,19,  ,21,  ,  ,  ,25,  ,  ,  ,  ,

function surviveN(n,arr){
    let k = 0;
    while(k<n/2){
        for(let i =0; i<arr.length; i++){
            if((k%2===0&&arr[i]*k-i)===n){
                console.log(`Does Not Survive: ${n}`);
                return;
            } else if(k%2!==0&&(arr[i]*k-i-1)===n){
                console.log(`Does Not Survive: ${n}`);
                return;
            }
        }
    k++;
    }
    console.log(`Survive: ${n}`);
    return;
}

surviveN(15,[2,3,5]);
surviveN(43,[2,3,5]);
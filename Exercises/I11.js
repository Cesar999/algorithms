function getMaxDigits(arr){
    if(arr.length===0){
        console.log('Not Possible');
        return;
    }
    arr.sort((a,b)=>{
        return b-a;
    });
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    if(sum%3===1){
        arr = removeSmallestRemainderOne(arr);
    } else if(sum%3===2){
        arr = removeSmallestRemainderTwo(arr);
        arr = removeSmallestRemainderOne(arr);
        arr = removeSmallestRemainderOne(arr);
    } else {
        sum = 0;
        for(let i=0; i<arr.length; i++){
            sum += Math.pow(10,arr.length-1-i)*arr[i];
        }
        if(sum%3===0){
            console.log(sum, 'Win');
            return;
        }
    }
    getMaxDigits(arr);
}

function removeSmallestRemainderOne(arr){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]%3===1){
            arr.splice(i,1);
            return arr;
        }
    }
    return arr;
}
function removeSmallestRemainderTwo(){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i]%3===2){
            arr.splice(i,1);
            return arr;
        }
    }
    return arr;
}

const arr = [4 , 4 , 1 , 1 , 1 , 3];
getMaxDigits(arr);

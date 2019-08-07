//[2,5,1,2,3,5,1,2,4]
//

function firstRecurringNum(arr){
    const map = {};
    for(let item of arr){
        if(map[item]){
            return item;
        } else {
            map[item] = true;
        }
    }
    return false;
}


const arr = [2,5,1,2,3,5,1,2,4];
const temp = firstRecurringNum(arr);
console.log(temp);
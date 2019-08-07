//"sportsbasement" - first unique character of this string 

function firstUnique(str){
    let map = {};
    for(let item of str){
        if(!map[item]){
            map[item]=1;
        } else {
            map[item]+=1;
        }
    }

    for(let item of str){
        if(map[item]===1){
            return item;
        }
    }

    return null;
}

console.log(firstUnique("sportsbasement"));
console.log(firstUnique("aabbccddffgghh"));
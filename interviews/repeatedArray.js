findRepeated([1,2,3,4,3]);

function findRepeated(arr){
    let map = {};
    for(let item of arr){
        map[item] = (map[item])?map[item]+1:1;
    }
    console.log(map);
}
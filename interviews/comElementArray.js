//find common elemen in the array
const arr = [
    [1, 2, 3, 4, 5],
    [1, 2, 5],
    [2, 5]
];

function findCommonElement(arr){
    let common = arr[0];
    let temp = [];
    for(let i=1; i<arr.length; i++){
        for(let j=0; j<common.length; j++){
            if(arr[i].includes(common[j])){
                temp.push(common[j]);
            }
        }
        common = temp;
        temp = [];
    }
    console.log(common);
    return;
}

findCommonElement(arr);

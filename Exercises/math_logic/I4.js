//Find the next elements in the series 1, 2, 6,15, 31, 56, ...

let temp = 0;
const result = [];
for(let i=0; i<10; i++){
    if(i!=0){
        temp += i*i;
        result.push(temp);
    } else {
        temp = 1;
        result.push(temp);
    }
}
console.log(result);

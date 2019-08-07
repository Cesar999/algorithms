// Given a string print the characters with their number of occurences
// input :: aaabbbccddddd
// output :: a3b3c2d5

function ocurrences(str){
    let count = 1;
    let result = str[0];
    for(let i=1; i<str.length; i++){
        if(str[i]===str[i-1]){
            count++;
        } else {
            result += count;
            result += str[i];
            count = 1;
        }
    }
    result += count;
    return result;
}

let data = 'aaabbbccddddd';
console.log(ocurrences(data));
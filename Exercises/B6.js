function reverseOdds(str){
    let words = str.split(" ");
    let result = "";
    for(let i=0; i<words.length; i++){
        if(i%2 !== 0){
            result += words[i].split("").reverse().join("");
        } else {
            result += words[i];
        }
        result += ' ';
    }
    return result;
}

const str = `Hello my name is Cesar Encinas`;
console.log(reverseOdds(str));
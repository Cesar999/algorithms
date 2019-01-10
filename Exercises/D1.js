const words = require('./words.json');
console.log(words.length);

const random_letters = 'socmar';
let counter = 0;
let longest = 0
let maxIndex = 0;
for(let i=0; i<words.length; i++){
    split_word = words[i].split('');
    for(let char of split_word){
        if(random_letters.indexOf(char) > -1){
            counter++;
        } else {
            counter = 0;
            break;
        }
    }
    if(counter>longest){
        longest = counter;
        maxIndex = i;
    }
    counter = 0;
}

console.log(words[maxIndex]);
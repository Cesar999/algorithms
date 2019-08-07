const str = 'I like to play the guitar';

function reverseOnlyWords(str){
    const words = str.split(' ');
    const reverseWords = words.map((word)=>word.split('').reverse().join(''));
    return reverseWords.join(' ');
}

console.log(reverseOnlyWords(str));
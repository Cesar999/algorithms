// Exercise (code a function that takes as input two strings
//     and tells wether they are acronyms.Disregard Upper/LowerCase
//     and special characters, find the complexity)

function areAcronyms(short, large){
    const regex = /[A-Za-z]+/g;
    words = large.match(regex);
    let temp = '';
    for(let w of words){
        temp+=w[0].toUpperCase();
    }
    console.log(temp === short);
    return temp === short;
}


// const str1 = 'NAFTA';
// const str2 = 'North American Free Trade Agreement';

const str1 = 'OSHA';
const str2 = 'Occupational Safety & Health Administration';

areAcronyms(str1, str2);
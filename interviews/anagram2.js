function anagram(str1, str2){
    const temp1 = str1.toLowerCase().match(/[a-zA-Z]/g).sort().join('');
    const temp2 = str2.toLowerCase().match(/[a-zA-Z]/g).sort().join('');
    console.log(temp1 === temp2);
    return temp1 === temp2;
}

anagram('rail safety', 'fairy tales');
anagram('RAIL! SAFETY', 'fairy tales');
anagram('Hi There', 'Bye There');

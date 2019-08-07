function isAnagram(str1, str2){
    let temp1 = str1.toLowerCase().split('').sort().join('').trim();
    let temp2 = str2.toLowerCase().split('').sort().join('').trim();
    console.log(temp1 === temp2);
    return temp1 === temp2;
}

isAnagram('The Morse Code', 'Here comes dots'); //False
isAnagram('Eleven plus two', 'Twelve plus one'); //True
isAnagram('Slot machines', 'Cash lost in me'); //True
const data = 'A nut for a jar of tuna!!';
console.log(isPalindrome(data));

function isPalindrome(str){
    let str1 = str.toLowerCase();
    let str2 = str.toLowerCase().split('').reverse().join('');
    str1 = str1.replace(/\s|\!/g,'');
    str2 = str2.replace(/\s|\!/g,'');
    console.log(str1, str2);
    return str1 === str2;
}
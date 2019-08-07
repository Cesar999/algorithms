function reverseString(str){
    let res = str.split('').reverse().join('');
    console.log(res);
}

reverseString('Cesar Encinas');


function reverseString2(str){
    let len = str.length-1;
    let k = 0;
    let arr = str.split('');
    while(k<len){
        [arr[k], arr[len]]=[arr[len], arr[k]];
        k++;
        len = len-1;
    }
    console.log(arr.join(''));
    return arr.join('');
}

reverseString2('Cesar Encinas');


function reverseString3(str){
    let output = '';
    for(let i=str.length-1; i>=0; i--){
        output += str[i];
    }
    console.log(output);
}
reverseString3('Cesar Encinas')
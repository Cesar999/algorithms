
function strPermOther(str1, str2){
    let temp1 = str1.split('').sort().join('');
    let temp2 = str2.split('').sort().join('');
    console.log(temp1 === temp2);
    return temp1 === temp2;
}

const str1 = `abcd`;
const str2 = `dcba`;
strPermOther(str1, str2);
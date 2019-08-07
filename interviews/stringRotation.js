const str1 = "cesaringo"; 
const str2 = "ringocesa";
console.log(isStrRotated(str1, str2));

function isStrRotated(str1, str2){
    return ((str1.length && str2.length)&&(str1+str1).includes(str2));
}


function isRotated(str1, str2){
    return (str1.length == str2.length) && 
               ((str1 + str1).indexOf(str2) != -1);            
}

const str1 = "cesaringo"; 
const str2 = "ringocesa"
console.log(isRotated(str1, str2)?"Yes": "No");
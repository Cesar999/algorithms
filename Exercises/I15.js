
const n1 = ['zero','one','two','three','four','five','six','seven','eight','nine'];
const n2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fiftheen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const n3 = ['','','twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const n4 = ['hundred','thousand'];

function printNumberWord(n){
    let number = n.toString();
    let digits = number.length;
    let count = 0;
    let result = '';

    while(count < number.length){
        //9999
        if(digits>=3){
            if(number[count]!=0){
                result = n1[number[count]] + ' '+ n4[digits-3] + ' ' + result;
            }
            digits--;
        } else {
            if(digits>1){
                if(number[number.length-2]==1){
                    result = result + n2[number[number.length-1]];
                    count++;
                } else{
                    result = result + n3[number[count]];
                }
            } else if(digits===1){
                result = result + ' ' + n1[number[count]];
            }
            digits--;
        }
        count++;
    }
    console.log(result);
}
printNumberWord(10);
printNumberWord(110);
printNumberWord(18);
printNumberWord(56);
printNumberWord(128);
printNumberWord(999);
printNumberWord(2018);
printNumberWord(9999);

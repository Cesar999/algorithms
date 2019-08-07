function reverseInt2(n) {
    let num = Math.sign(n) * n;
    const reversed = num.toString().split('').reverse().join('');
    console.log(parseInt(reversed));
    return parseInt(reversed);
}
reverseInt2(1234560);


function reverseInt(n){
    let num = n * Math.sign(n);
    let revNum = 0;
    while(num>0){
        revNum = revNum*10 + num%10;
        num = Math.floor(num/10);
    }
    console.log(revNum);
    return revNum;
}
reverseInt(1234560);

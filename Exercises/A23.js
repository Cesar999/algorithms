
class Stack{
    constructor(){
        this.data = [];
    }

    push(record){
        this.data.push(record);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length-1];
    }

    isEmpty(){
        return this.data.length < 1;
    }
}

function toBase(n,base){
    let s = new Stack();
    let remainder = 0;
    while(n>0){
        remainder = n % base;
        s.push(remainder);
        n = Math.floor(n / base);
    }

    const digits = [];
    while(!s.isEmpty()){
        digits.push(s.pop());
    }

    return digits.join("");
}

let x = 9;
let a1 = x.toString(8);
let b1 = x.toString(16);
let a2 = toBase(x,8)
let b2 = toBase(x,16);
console.log(a1,a2);
console.log(b1,b2);

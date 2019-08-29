

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

function decodestr(str){
    const stackNums = new Stack();
    const stackStrings = new Stack();
    let temp = '';
    let result = '';

    //check all the string 
    for(let i=0; i<str.length; i++){
        let count = 0;
        //Number('[')>=0 is false
        //Number('2')>=0 is true
        //check if is a number
        if(Number(str[i])>=0 && Number(str[i])<=9){
            while (Number(str[i])>=0 && Number(str[i])<=9) {
                    count = count * 10 + str[i]; 
                    i++; 
            } 
            i--; 
            stackNums.push(Number(count));
        } else if (str[i] == ']') { 
            temp = ''; 
            count = 0; 
            if (!stackNums.isEmpty()) { 
                count = stackNums.peek(); 
                stackNums.pop(); 
            } 
            while (!stackStrings.isEmpty() && stackStrings.peek()!='[' ){ 
                temp = stackStrings.peek() + temp; 
                stackStrings.pop(); 
            } 

            if (!stackStrings.isEmpty() && stackStrings.peek() == '['){
                stackStrings.pop(); 
            } 
                 
            for(let j = 0; j < count; j++) {
                result = result + temp; 
            }
                
            for(let j = 0; j < result.length; j++) {
                stackStrings.push(result[j]); 
            }
                
            result = ""; 

        } else if (str[i] == '[') { 
            if (Number(str[i-1])>=0&&Number(str[i-1])<=9) {
                stackStrings.push(str[i]); 
            } else{ 
                stackStrings.push(str[i]); 
                stackNums.push(1); 
            } 
        } else {
            stackStrings.push(str[i]); 
        }
    } 

    while (!stackStrings.isEmpty()) { 
        result = stackStrings.peek() + result; 
        stackStrings.pop(); 
    } 
   
    return result; 
}

console.log(decodestr('3[a]2[bc]')); // aaabcbc
console.log(decodestr('3[a2[c]]')); // accaccacc
console.log(decodestr('100[leetcode]')); // abcabccdcdcdef

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

function isMatchingPair(c1, c2){ 
   if (c1 === '(' && c2 === ')') {
       return true; 
    }
   else if (c1 === '{' && c2 === '}') {
       return true; 
    }
   else if (c1 === '[' && c2 === ']') {
       return true; 
    }
   else{
       return false;
    }
}

function balanced(str){
    const s = new Stack();
    for(let i=0; i<str.length;i++){
        if(str[i]==='('||str[i]==='['||str[i]==='{'){
            s.push(str[i]);
        }
        if(str[i]===')'||str[i]===']'||str[i]==='}'){
            if (s.isEmpty()) { 
                return false; 
            }  
            else if(!isMatchingPair(s.pop(),str[i])){ 
                return false; 
            }
        }
    }

    if (s.isEmpty()) {
        return true; 
    }
    else{   
        return false; 
    }  
}

const str = `{[([]{}())]}`;
console.log(balanced(str));
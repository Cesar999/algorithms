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

function balanced(str){
    const s = new Stack();
    for(let i=0; i<str.length; i++){
        if(str[i]==='('){
            s.push(str[i]);
        } 
        if (str[i]===')'){
            if (s.isEmpty()) { 
                return false; 
            }  
            s.pop();
        } 
    }
    if (s.isEmpty()) { 
        return true; 
    } else {
        return false;
    }
}

let str = `(())(())()`;
console.log(balanced(str));
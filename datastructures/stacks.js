
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

module.exports = Stack;

// s = new Stack();

// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// console.log(s);
// console.log(s.peek());
// s.pop();
// s.pop();
// s.pop();
// console.log(s);
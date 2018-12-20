
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.top){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        console.log(++this.size, newNode.value);
    }

    pop(){
        if(!this.top){
            return null;
        }
        let temp = this.top;
        if(this.top === this.bottom){
            this.bottom = null;
        }
        this.top = this.top.next;
        console.log(--this.size, temp.value);
    }
}

const s = new Stack();
s.push('A');
s.push('B');
s.push('C');
s.pop();
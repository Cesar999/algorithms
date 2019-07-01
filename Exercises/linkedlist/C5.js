//Given a single linked list as input, Determine if the contents is a palyndrome.

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

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    getMiddle(){ 
        const h = this.head;
        //Base case 
        if (h == null) {
            return h; 
        }
            
        let fast = h.next; 
        let slow = h; 
          
        // Move fast by two and slow by one 
        // Finally slow will point to middle node 
        while (fast != null) { 
            fast = fast.next; 
            if(fast!=null) { 
                slow = slow.next; 
                fast = fast.next; 
            } 
        } 
        return slow; 
    } 


    checkPal(){
        const s = new Stack();
        const middle = this.getMiddle();
        let current = this.head;
        while(current!==middle){
            s.push(current.val);
            current = current.next;
        }
        while(current!==null){
            if(current.val===s.peek()){
                s.pop();
            }
            current = current.next;
        }
        if(s.isEmpty()){
            console.log(`It is a Palindrome`);
        } else {
            console.log(`It is NOT a Palindrome`);
        }
    }

}

const list = new SinglyLinkedList();
list.push('R');
list.push('A');
list.push('D');
list.push('D');
list.push('A');
list.push('R');
list.checkPal();


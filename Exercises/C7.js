class Node {
    constructor(val, prior){
        this.val = val;
        this.next = null;
        this.prior = prior;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    peek()  {  
        return this.head;  
    }  

    pop() {  
        this.head  = this.head.next;  
        return this.head; 
    }    

    isEmpty() {  
        return this.head === null?true:false;  
    } 

    push(d, p)  {          
        const temp = new Node(d, p);  
        const start = this.head;  
        if(this.head === null) {
            this.head = temp;
            return this.head;
        } 

        if (this.head.prior > p) {  
            temp.next = this.head;  
            this.head = temp;  
        }  else {  
                while (start.next !== null &&  start.next.prior < p) {  
                    start = start.next;  
                }   
                temp.next = start.next;  
                start.next = temp;  
            }  
        return this.head;  
    }  
        
}

const list = new SinglyLinkedList();
list.push('A',9);
list.push('B',6);
list.push('C',0);
list.push('D',3);
list.push('E',1);
list.traverse();
 
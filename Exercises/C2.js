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

    get(index){
        if(index < 0 || index >= this.length){ return null;}
        let counter = 0;
        let current = this.head;

        while(counter !== index){
            counter++;
            current = current.next;
        }
        
        return current;
    }

    createLoop(index){
        this.tail.next = this.get(index);
        console.log(this.tail);
    }

    checkLoop(){
        let slow = this.head.next;
        let fast = this.head.next.next;
        while (fast && fast.next) { 
            if (slow == fast) {
                console.log(`Slow: ${slow.val} - Fast: ${fast.val}`);
                break; 
            }
            slow = slow.next; 
            fast = fast.next.next; 
        } 

        if (slow != fast) {
            console.log(`Theres no loop`);
        }

        slow = this.head; 
        while (slow !== fast) { 
            slow = slow.next; 
            fast = fast.next; 
        } 

        console.log(`Loop start in ${slow.val}`);
    }


}

let sl = new SinglyLinkedList();
sl.push('A');
sl.push('B');
sl.push('C');
sl.push('D');
sl.push('E');
sl.push('F');
sl.push('G');
console.log(sl.length);
sl.createLoop(2);
sl.checkLoop();


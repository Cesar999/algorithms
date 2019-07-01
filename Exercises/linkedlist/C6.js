//Reverse a Linked List

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

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for(let i=0; i<this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }

}

const list = new SinglyLinkedList();
list.push('A');
list.push('B');
list.push('C');
list.push('D');
list.traverse();
console.log('---');
list.reverse();
list.traverse();
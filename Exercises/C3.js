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

    getFromLast(index){
        let temp = this.head;
        let count = 0;
        while(temp!==null){
            temp = temp.next;
            count++;
        }
        console.log(count);
        if(index<0||index>=count){
            console.log('Index Out of Range');
            return; 
        }
        let result = this.head;
        let i = 1;
        while(i<count-index){
            i++;
            result = result.next;
        }
        console.log(`Index: ${index} is the element ${result.val}`);
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
sl.getFromLast(0);
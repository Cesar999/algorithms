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

    pop(){
        if(!this.head){
            return null;
        }

        let current = this.head;
        let newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }

    shift(){
        if(!this.head){
            return null;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
    }

    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
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

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index<0 || index >= this.length){
            return false;
        }
        if(index === this.length){
            this.push(val);
            return true;
        }
        if(index === 0){
            this.unshift(val);
            return true;
        }
        let prev = this.get(index-1);
        let newNode = new Node(val);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        return true;
    }

    remove(index){
        if(index<0 || index >= this.length){
            return false;
        }
        if(index === 0){ 
            this.shift();
            return true;
        }
        if(index === this.length-1){ 
            this.pop();
            return true;
        }
        let previousNode = this.get(index-1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return true;
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

    middleNode(){
        let middle = this.head;
        let end = this.head;
        while(end !==this.tail){
            if(end.next.next===null){
                break;
            }
            middle = middle.next;
            end = end.next.next;
        }
        console.log(`Middle Node Two Pointers: ${middle.val}`);
        //-------------------------------------------
        let temp = this.get(Math.floor(this.length/2));
        console.log(`Middle Node Length: ${temp.val}`);
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
sl.traverse();
sl.middleNode();

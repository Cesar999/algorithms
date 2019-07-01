class PriorityQueue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = {val, next: null};
        // First value
        if(!this.head){
            this.head = newNode;
            return;
        } 

        // Insert New value before head  
        if(newNode.val>this.head.val){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        //traverse the list
        let current = this.head;
        while(current.next!==null){
            if(current.next.val<newNode.val){
                let next = current.next;
                current.next = newNode;
                newNode.next = next;
                return;
            }
            current = current.next;
        }
        current.next = newNode;
    }

    pop(){
        let temp = this.head;
        this.head = this.head.next;
        return temp.val;
    }
}
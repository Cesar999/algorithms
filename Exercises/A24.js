class CircularQueue{
    constructor(size){
        this.items = Array(size).fill(null);
        this.front = -1;
        this.rear = -1;
        this.SIZE = size;
    }

    isFull(){
    if( (this.front == this.rear + 1) || (this.front == 0 && this.rear == this.SIZE-1)){
        return true;
    } 
        return false;
    }

    isEmpty(){
    if(this.front == -1){
        return true;
    } 
        return false;
    }

    enQueue(element) {
        if(this.isFull()) {
            console.log("Queue is full!!");
        } else{
            if(this.front == -1) {
                this.front = 0;
            }
            this.rear = (this.rear + 1) % this.SIZE;
            this.items[this.rear] = element;
            //console.log("Inserted ->", element);
        }
    }

    deQueue(){
        let element;
        if(this.isEmpty()) {
            console.log("Queue is empty");
            return false;
        } else {
            element = this.items[this.front];
            this.items[this.front] = null;
            if (this.front == this.rear){
                this.front = -1;
                this.rear = -1;
            } else {
                this.front = (this.front + 1) % this.SIZE;
            }
            //console.log("Deleted element -> ", element);
            return(element);
        }
    }

    display(){
        /* Function to display status of Circular Queue */
        let i;
        if(this.isEmpty()) {
            console.log("Empty Queue");
        }
        else {
            console.log("Front -> ", this.front);
            console.log("Rear -> ", this.rear);
            console.log(this.items);
        }
    }

    getFront(){
       return this.items[this.front];
    }

    isThereOnlyOne(){
        return this.rear===this.front?true:false;
    }
    
}

const list = ['Cesar','Leslie','Roberto','Rafael','Manuel'];
console.log(hot_potato(list));

function hot_potato(list){
    let cq = new CircularQueue(list.length);
    for (let i=0; i<list.length; i++){
        cq.enQueue(list[i]);
    }

    let hot = Math.floor(Math.random()*list.length)*2;
    cq.display();
    while(!cq.isThereOnlyOne()){
        while(hot>0){
            cq.enQueue(cq.deQueue());
            hot--;
        }
        console.log(cq.deQueue(),`Loose`);
        cq.display();
        hot = Math.floor(Math.random()*list.length)*2;
    }
    cq.display();
    return cq.deQueue();
}

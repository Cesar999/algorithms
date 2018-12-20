class Queue {
    constructor(){
        this.data = [];
    }

    enqueue(record){
        this.data.push(record);
    }

    dequeue(){
        return this.data.shift();
    }

    isEmpty(){
        return this.data.length < 1;
    }
}

module.exports = Queue;
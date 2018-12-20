class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority);
    }
}

// const pq = new PriorityQueue();
// pq.enqueue("A",9);
// pq.enqueue("B",1);
// pq.enqueue("C",5);

// console.log(pq.values);

module.exports = PriorityQueue;
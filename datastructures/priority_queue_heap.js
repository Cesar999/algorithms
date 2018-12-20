class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        console.log(this.values);
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            // console.log(this.values);
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority<=parent.priority){break;}//prior
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeueMax(){
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        console.log(max);
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx =2*idx+1;
            let rightChildIdx = 2*idx+2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority>element.priority){//prior
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                   (swap === null && rightChild.priority > element.priority) ||
                   (swap !== null && rightChild.priority > leftChild.priority)
                ){
                   swap = rightChildIdx;
                }
            }
            if(swap === null){break;}
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

let q = new PriorityQueue();
q.enqueue("LOW",1);
q.enqueue("HIGH",5);
q.enqueue("MEDIUM",2);
q.dequeueMax();

class MinHeap {
    constructor(){
        this.values = [];
    }

    getLeftChildIndex(idx){return 2*idx+1;}
    getRightChildIndex(idx){return 2*idx+2;}
    getParentIndex(idx){return Math.floor((idx-1)/2);}

    hasLeftChild(idx){return this.getLeftChildIndex(idx)<this.values.length}
    hasRightChild(idx){return this.getRightChildIndex(idx)<this.values.length}
    hasParent(idx){return this.getParentIndex(idx)<this.values.length}

    leftChild(idx){return this.values[this.getLeftChildIndex(idx)]}
    rightChild(idx){return this.values[this.getRightChildIndex(idx)]}
    parent(idx){return this.values[this.getParentIndex(idx)]}

    peek(){
        if(this.values.length<=0){
            return null;
        }
        return this.values[0];
    }

    pull(){
        if(this.values.length<=0){
            return null;
        }
        const min = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.heapifyDown();
        return min;
    }

    add(val){
        this.values.push(val);
        this.heapifyUp();
    }

    getIndex(val){
        if(this.values[0]>val){
            return -1;
        }
        for(let i=0; i<this.values.length; i++){
            if(this.values[i]===val){
                return i;
            }
        }
        return -1;
    }

    remove(val){
        let rmvIdx = this.getIndex(val);
        this.values[rmvIdx] = this.values[this.values.length-1];
        this.values[this.values.length-1] = val;
        this.values.pop();
        this.heapifyDown();
        //this.heapifyUp();
    }

    heapifyUp(){
        let idx = this.values.length - 1;
        while(this.hasParent(idx) && this.parent(idx)>this.values[idx]){
            let temp = this.values[idx];
            this.values[idx] = this.parent(idx);
            this.values[this.getParentIndex(idx)] = temp;
            idx = this.getParentIndex(idx);
        }
    }

    heapifyDown(){
       let idx = 0;
       while(this.hasLeftChild(idx)){
           let smallerChildIndex = this.getLeftChildIndex(idx);
           if(this.hasRightChild(idx) && this.rightChild(idx)<this.leftChild(idx)){
            smallerChildIndex = this.getRightChildIndex(idx);
           }

           if(this.values[idx]<this.values[smallerChildIndex]){
               break;
           } else {
            let temp = this.values[idx];
            this.values[idx] = this.values[smallerChildIndex];
            this.values[smallerChildIndex] = temp;
            idx = smallerChildIndex;
           }
       } 
    }

    printTop(){
        console.log(this.values[0]);
    }
    print(){
        console.log(this.values);
    }
}

const heap = new MinHeap();

heap.add(-100000);
heap.add(10000);
heap.add(100000);
heap.add(1000000);
heap.add(10000000);
heap.print();
heap.remove(10000000);
heap.print();

// heap.pull();
// heap.pull();
// heap.pull();
// heap.pull();
// heap.pull();
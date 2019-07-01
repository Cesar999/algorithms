class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(val){
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx = this.values.length-1;
        const item = this.values[idx];
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(item<=parent){break;}//Max heap
            //Swap
            this.values[parentIdx] = item;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown(){
        const size = this.values.length;
        const anchor = this.values[0]; //Because is sinking!!!
        let letfIdx;
        let rightIdx;
        let leftChild, rightChild, swapIdx;
        let idx = 0;

        while(true){
            letfIdx = 2*idx+1;
            rightIdx = 2*idx+2;
            swapIdx = null;

            //Check left child in array range and store inx to swap.
            if(letfIdx<size){
                leftChild = this.values[letfIdx];
                if(leftChild>anchor){swapIdx = letfIdx;}
            }

            //Check right child in array range and store index to swap
            //if right is greater than left swap with righ. 
            //bassically swap with greater child
            if(rightIdx<size){
                rightChild = this.values[rightIdx];
                if((swapIdx===null&&rightChild>anchor)||
                   (swapIdx!==null&&rightChild>leftChild)
                ){swapIdx = rightIdx;}
            }

            if(swap===null){break;}

            //Swap
            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = anchor;
            idx = swapIdx;
        }
    }
}

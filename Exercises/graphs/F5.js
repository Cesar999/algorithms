//AMC ICPC 2017 - problem I: Chamber of Secrets

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


class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = [];
        }
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
    }
    isReachable(start, end){
        if(!this.adjacencyList[start] || !this.adjacencyList[end]){
            return false;
        }

        const queue = new Queue();
        const visited = {};
        let currentVertex;
        visited[start] = true;
        queue.enqueue(start);
        while(!queue.isEmpty()){
            currentVertex = queue.dequeue();
            if(currentVertex === end){
                return true;
            }
            
            for(let n of this.adjacencyList[currentVertex]){
                if(!visited[n]){
                    visited[n] = true;
                    queue.enqueue(n);
                }
            }
        }
        return false;
    }
    chamberOfSecrets(w1,w2){
        if(w1.length!==w2.length){
            console.log('no');
            return false;
        }
        let temp;
        for(let i=0; i<w1.length; i++){
            temp = this.isReachable(w1[i],w2[i]);
            if(!temp){
                console.log('no');
                return false;
            }
        }
        console.log('yes');
        return true;
    }
}

const data1 = ['c','i','k','o','r','t','t','u','w'];
const data2 = ['t','r','p','c','o','e','f','h','p'];

const temp = [...(new Set(data1.concat(data2)))];
const g = new Graph();
for(let c of temp){
    g.addVertex(c);
}
for(let i=0; i<data1.length; i++){
    g.addEdge(data1[i],data2[i]);
}

g.chamberOfSecrets('we','we');
g.chamberOfSecrets('can','the');
g.chamberOfSecrets('work','people');
g.chamberOfSecrets('it','of');
g.chamberOfSecrets('out','the');


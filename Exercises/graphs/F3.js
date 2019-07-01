//Represent a graph in an adjacency matrix and as a list of nodes

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

    traverse(v){
        let str = '';
        let current = this.head;
        while(current){
            str = str + ' --> ' + current.val;
            current = current.next;
        }
        console.log(v +  str);
    }

}

class Graph{ 
    // constructor  
    constructor() {  
        this.adjacencyList = {}; 
        this.nodes = 0;
        this.adjacencyMatrix = [];
        this.reference = [];
    } 

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new SinglyLinkedList();
        }
        this.nodes++;
        this.adjacencyMatrix = Array.from(Array(this.nodes),()=>Array(this.nodes).fill(0));
        this.reference.push(vertex);
    }

    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);

        let i1 = this.reference.indexOf(v1);
        let i2 = this.reference.indexOf(v2);
        this.adjacencyMatrix[i1][i2] = 1;
        this.adjacencyMatrix[i2][i1] = 1;
    }

    displayList(){
        console.log('Adjacency List');
        for(let v in this.adjacencyList){
            this.adjacencyList[v].traverse(v);
        }
        console.log();
    }

    displayMatrix(){
        console.log('Adjacency Matrix');
        let str = '  ';
        for(let l of this.reference){
            str = str + '  ' + l;
        }
        console.log(str);
        console.log(this.adjacencyMatrix);
    }
}

const g = new Graph();
// g.addVertex(0);
// g.addVertex(1);
// g.addVertex(2);
// g.addVertex(3);
// g.addVertex(4);
// g.addEdge(0, 1); 
// g.addEdge(0, 4); 
// g.addEdge(1, 2); 
// g.addEdge(1, 3); 
// g.addEdge(1, 4); 
// g.addEdge(2, 3); 
// g.addEdge(3, 4);
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addEdge('A', 'B'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('B', 'D'); 
g.addEdge('B', 'E'); 
g.addEdge('C', 'D'); 
g.addEdge('D', 'E');
g.displayList();
g.displayMatrix();
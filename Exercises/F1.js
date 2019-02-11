class Stack{
    constructor(){
        this.data = [];
    }

    push(record){
        this.data.push(record);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length-1];
    }

    isEmpty(){
        return this.data.length < 1;
    }
}

class Graph{
    constructor(v){
        this.V = v;
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
    }

    topologicalSortUtil(v, visited, stack) { 
        // Mark the current node as visited. 
        visited[v] = true; 
        // Recur for all the vertices adjacent to this 
        // vertex 
        for(let n of this.adjacencyList[v]){ 
            if (!visited[n]){
                this.topologicalSortUtil(n, visited, stack); 
            } 
        } 
        // Push current vertex to stack which stores result 
        stack.push(v); 
    } 

    // The function to do Topological Sort. It uses 
    // recursive topologicalSortUtil() 
    topologicalSort() { 
        const stack = new Stack(); 

        // Mark all the vertices as not visited 
        const visited = {}; 
        for(let v in this.adjacencyList){
            visited[v] = false;
        }

        // Call the recursive helper function to store 
        // Topological Sort starting from all vertices 
        // one by one 
        for(let v in this.adjacencyList){ 
            if (visited[v] == false){
                this.topologicalSortUtil(v, visited, stack); 
            }
        }
        // Print contents of stack 
        while (stack.isEmpty()===false) {
            console.log(stack.pop() + " "); 
        }
        
    } 


}    

// Create a graph given in the above diagram 

const g = new Graph(6); 
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);

g.addEdge(5, 2); 
g.addEdge(5, 0); 
g.addEdge(4, 0); 
g.addEdge(4, 1); 
g.addEdge(2, 3); 
g.addEdge(3, 1);

g.topologicalSort(); 
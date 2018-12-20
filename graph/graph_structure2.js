class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1]
        .filter(v => v != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2]
        .filter(v => v != vertex1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex){
            if(!vertex) {return null};
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor);
                }
            });
        }
        dfs(start);
        console.log(result);
        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        console.log(result);
        return result;
    }
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        console.log(result);
        return result;
    }
}

let g = new Graph();
// g.addVertex("Berlin");
// g.addVertex("Tokyo");
// g.addVertex("Roma");
// g.addVertex("Seattle");
// g.addEdge("Tokyo", "Roma");
// g.addEdge("Tokyo", "Berlin");
// g.addEdge("Seattle", "Berlin");
// //g.removeEdge("Roma","Tokyo");
// g.removeVertex("Roma");
// console.log(g);

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertex("G")

g.addEdge('A', 'B'); 
g.addEdge('A', 'C'); 
g.addEdge('B', 'D'); 
g.addEdge('B', 'E'); 
g.addEdge('C', 'F'); 
g.addEdge('C', 'G'); 
g.depthFirstRecursive("A");
g.depthFirstIterative("A");
g.breadthFirst("A");

//           A
//         /   \
//       B       C
//      / \     / \
//     D   E   F   G

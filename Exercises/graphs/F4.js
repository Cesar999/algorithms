//Implement shortest bath algorithm for unweighted graphs. BFS approach

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

    shortestPath(start, end){
        const queue = [start];
        const visited = {};

        const previous = {};
        const shortest_path = []; 

        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            if(currentVertex === end){
                while(previous[currentVertex]){
                    shortest_path.unshift(currentVertex);
                    currentVertex = previous[currentVertex];
                }
                shortest_path.unshift(currentVertex);
                break;
            }

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    previous[neighbor] = currentVertex;
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        console.log(shortest_path, shortest_path.length-1);
        return shortest_path;
    }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");
g.addVertex("H");
g.addVertex("I");
g.addVertex("J");
g.addVertex("K");
g.addVertex("L");
g.addVertex("M");
g.addVertex("N");
g.addVertex("O");
g.addVertex("P");
g.addVertex("Q");
g.addVertex("R");
g.addVertex("S");
g.addVertex("T");

g.addEdge('A', 'B'); 
g.addEdge('A', 'D');
g.addEdge('B', 'I');
g.addEdge('B', 'E');
g.addEdge('D', 'C');
g.addEdge('D', 'F');
g.addEdge('D', 'E');
g.addEdge('E', 'J');
g.addEdge('I', 'J');
g.addEdge('C', 'G');
g.addEdge('F', 'G');
g.addEdge('F', 'L');
g.addEdge('E', 'H');
g.addEdge('E', 'K');
g.addEdge('J', 'O');
g.addEdge('H', 'L');
g.addEdge('H', 'K');
g.addEdge('K', 'N');
g.addEdge('O', 'N');
g.addEdge('G', 'L');
g.addEdge('L', 'M');
g.addEdge('M', 'N');

g.addEdge('L', 'P');
g.addEdge('M', 'P');
g.addEdge('M', 'Q');
g.addEdge('N', 'R');
g.addEdge('P', 'S');
g.addEdge('Q', 'S');
g.addEdge('R', 'Q');
g.addEdge('Q', 'T');
g.addEdge('R', 'T');

g.shortestPath("A","T");
//------------------------------------
// g.addEdge('A', 'B'); 
// g.addEdge('A', 'C'); 
// g.addEdge('B', 'D'); 
// g.addEdge('B', 'E'); 
// g.addEdge('C', 'F'); 
// g.addEdge('C', 'G'); 

// g.addEdge('D', 'H'); 
// g.addEdge('D', 'I'); 
// g.addEdge('E', 'J'); 
// g.addEdge('E', 'K'); 
// g.addEdge('F', 'L'); 
// g.addEdge('F', 'M'); 
// g.addEdge('G', 'N'); 
// g.addEdge('G', 'O');
//
//g.shortestPath("A","M");
//             A 
//         /       \
//       B           C
//     /   \       /   \
//    D     E     F     G
//   / \   / \   / \   / \
//  H   I J   K L   M N   O
//------------------------------------



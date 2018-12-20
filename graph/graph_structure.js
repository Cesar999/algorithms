var bfs = require('./graph_bfs');
var dfs = require('./graph_dfs');
var dfs_stack = require('./graph_dfs_stack');

class Graph {
    constructor(vertices){
        this.vertices = vertices;
        this.adjList = new Map();
        this.addVertices();
    }

    addVertices(){
        for (var i = 0; i < this.vertices.length; i++) { 
            this.adjList.set(this.vertices[i],[]);
        } 
    }

    addEdge(v, w) {  
        this.adjList.get(v).push(w); 
        this.adjList.get(w).push(v); 
    } 

    printGraph() { 
    var get_keys = this.adjList.keys(); 
        for (var i of get_keys) { 
            var get_values = this.adjList.get(i); 
            var conc = ""; 
            for (var j of get_values) 
                conc += j + " "; 
            console.log(i + " -> " + conc); 
        } 
    } 
}

var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

var g = new Graph(vertices); 
  
g.addEdge('A', 'B'); 
g.addEdge('A', 'C'); 
g.addEdge('B', 'D'); 
g.addEdge('B', 'E'); 
g.addEdge('C', 'F'); 
g.addEdge('C', 'G'); 
g.printGraph(); 

console.log('----BFS----');
bfs('A', g);
console.log('----DFS----');
dfs('A', g);
console.log('----DFS STACK----');
dfs_stack('A', g);
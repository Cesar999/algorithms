const Stack = require('../datastructures/stacks');

function DFS(v, graph){
    const arr = [];
    let s = new Stack();
    const visited = {}; 
    for (let n of graph.vertices) {
        visited[n] = false; 
    }
    s.push(v);
    while(!s.isEmpty()){
        let u = s.pop();
        if(!visited[u]){
            visited[u] = true; 
            arr.push(u); 
            let neighbours = graph.adjList.get(u); 
            neighbours = neighbours.reverse(); //preOrder
            for (let i in neighbours) { 
                s.push(neighbours[i]); 
            }
        }
    }
    console.log(arr);
}

module.exports = DFS;
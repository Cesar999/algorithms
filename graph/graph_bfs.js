var Queue = require('../datastructures/queue');


function bfs(startingNode, graph) { 
    const arr = [];
    var visited = {}; 
    for (var v of graph.vertices) {
        visited[v] = false; 
    }

    var q = new Queue(); 
  
    visited[startingNode] = true; 
    q.enqueue(startingNode); 

    while (!q.isEmpty()) { 
        var getQueueElement = q.dequeue(); 
        arr.push(getQueueElement); 
        var get_List = graph.adjList.get(getQueueElement); 
 
        for (var i in get_List) { 
            var neigh = get_List[i]; 
            if (!visited[neigh]) { 
                visited[neigh] = true; 
                q.enqueue(neigh); 
            } 
        } 
    } 
    console.log(arr);
} 

module.exports = bfs;
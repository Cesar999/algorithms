let graph;
const arr = [];

function dfs(startingNode, g){ 
    graph = g;
    let visited = {}; 
    for (let v of graph.vertices) {
        visited[v] = false; 
    }
  
    DFSUtil(startingNode, visited); 
    console.log(arr);
} 
  
function DFSUtil(vert, visited) { 
    visited[vert] = true; 
    arr.push(vert); 
  
    let get_neighbours = graph.adjList.get(vert); 
  
    for (let i in get_neighbours) { 
        let get_elem = get_neighbours[i]; 
        if (!visited[get_elem]){
            DFSUtil(get_elem, visited); 
        }
    } 
} 

module.exports = dfs;
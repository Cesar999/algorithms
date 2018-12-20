const PriorityQueue = require('../datastructures/priority_queue');

class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2, weight){
        this.adjacencyList[v1].push({node:v2,weight});
        this.adjacencyList[v2].push({node:v1,weight});
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const visited = {};
        const direction =[];
        let smallest;

        let shortest_path = []; 
        let total = 0;
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex]=0;
                visited[vertex] = false;
                nodes.enqueue(vertex,0);
            } else {
                distances[vertex] = Infinity;
                visited[vertex] = false;
            }
            previous[vertex]=null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            //console.log(nodes.values,'X')
            if(smallest === finish){
                //console.log(distances);
                //console.log(previous);
                while(previous[smallest]){
                    shortest_path.unshift(smallest);
                    smallest = previous[smallest];
                }
                shortest_path.unshift(smallest);
                total = distances[finish];
                break;
            }
            if(visited[smallest] === false){
                direction.push(smallest);
                const temp = this.adjacencyList[smallest];
                for(let neighbor in temp){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor]=candidate;
                        previous[nextNeighbor]=smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        console.log(direction);
        console.log(shortest_path, total); 
    }
    aStar(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const visited = {};
        const heuristics = {
            S: 4, A: 3, B: 4, C: 5, D: 2, E: 4, F: 4,
            G: 1, H: 3, I: 3, X: 0
        };
        const direction =[];
        let smallest;

        let shortest_path = []; 
        let total = 0;
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex]=0;
                visited[vertex] = false;
                nodes.enqueue(vertex,0+heuristics[vertex]);
            } else {
                distances[vertex] = Infinity;
                visited[vertex] = false;
            }
            previous[vertex]=null;
        }
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    shortest_path.unshift(smallest);
                    smallest = previous[smallest];
                }
                shortest_path.unshift(smallest);
                total = distances[finish];
                break;
            }
           
            if(visited[smallest] === false){
                direction.push(smallest);
                const temp = this.adjacencyList[smallest];
                for(let neighbor in temp){
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let candidate = distances[smallest] + nextNode.weight+heuristics[nextNode.node];
                    let nextNeighbor = nextNode.node;
                    if(candidate < (distances[nextNeighbor]+heuristics[nextNeighbor])){
                        distances[nextNeighbor]=candidate-heuristics[nextNode.node];
                        previous[nextNeighbor]=smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        console.log(direction);
        console.log(shortest_path, total); 
    }
}


const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");
g.addVertex("H");
g.addVertex("I");
g.addVertex("S");
g.addVertex("X");

g.addEdge("S","A",1);
g.addEdge("A","B",2);
g.addEdge("B","C",2);
g.addEdge("A","D",2);
g.addEdge("D","E",2);
g.addEdge("B","E",2);
g.addEdge("E","F",2);
g.addEdge("C","F",2);
g.addEdge("D","G",2);
g.addEdge("G","H",2);
g.addEdge("E","H",2);
g.addEdge("H","I",2);
g.addEdge("F","I",2);
g.addEdge("G","X",1);

g.Dijkstra("S","X");
console.log('----------')
g.aStar("S","X");

//---------------------------------
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");

// g.addEdge("A","B",6);
// g.addEdge("A","D",1);
// g.addEdge("B","D",2);
// g.addEdge("B","C",5);
// g.addEdge("B","E",2);
// g.addEdge("D","E",1);
// g.addEdge("E","C",5);

// g.Dijkstra("A","E");
//------------------------------

// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// g.addVertex("D");
// g.addVertex("E");
// g.addVertex("F");

// g.addEdge("A","B",4);
// g.addEdge("A","C",2);
// g.addEdge("B","E",3);
// g.addEdge("C","D",2);
// g.addEdge("C","F",4);
// g.addEdge("D","E",3);
// g.addEdge("D","F",1);
// g.addEdge("E","F",1);

// -----------------------

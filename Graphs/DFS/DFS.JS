class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] =  this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );

        this.adjacencyList[vertex2] =  this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacenctVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacenctVertex);
        }
        delete this.adjacencyList[vertex];
    }
    showGraph(){
        console.log(this.adjacencyList);
    }

    getAdjacencyList(){
        return this.adjacencyList;
    }

    dfsHelper(node, visited){

        visited[node] = true ;
        console.log(node);

        this.adjacencyList[node].forEach(neighbour=>{
            if(!visited[neighbour]){
                this.dfsHelper(neighbour, visited);
            }
        });

        return;
    }

    depthFirstRecursive(start){
        let visited = [];
        this.dfsHelper(start, visited);
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};

        visited[start] = true;
        while(stack.length){
            let currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbour) =>{
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

//      A
//    /   \
//   B     C
//   |     |
//   D --- E
//   \    /
//     F
graph.depthFirstRecursive("A");

let y = graph.depthFirstIterative("A");
console.log("y : ",y);
// graph.showGraph();


exports = {
    Graph,
}
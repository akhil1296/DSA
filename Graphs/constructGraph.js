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
}

const graph = new Graph();
graph.addVertex("Japan");
graph.addVertex("India");
graph.addVertex("USA");
graph.addVertex("China");
graph.addEdge("Japan", "India");
graph.addEdge("USA", "China");
graph.addEdge("Japan", "China");
graph.addEdge("India", "China");
// graph.removeEdge("USA", "China");
// graph.removeVertex("Japan");
graph.showGraph();

exports = {
    Graph,
}
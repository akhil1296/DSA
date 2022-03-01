class WeightedGraphs {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    showGraph() {
        console.log(this.adjacencyList);
    }
    getGraph() {
        return this.adjacencyList;
    }
}

// const graph = new WeightedGraphs();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B" ,9);
// graph.addEdge("A", "C" ,10);
// graph.addEdge("B", "C" ,5);
// graph.showGraph();


module.exports = {
    WeightedGraphs
};
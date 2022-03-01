class CyclicGraph{
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
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
             v => v !== v2 ); 
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            let currentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, currentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    showGraph(){
        console.log(this.adjacencyList);
    }
    getGraph(){
        return this.adjacencyList;
    }
}

module.exports = {
    CyclicGraph,
};
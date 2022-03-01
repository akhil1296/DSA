class GeneralGraph{
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
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
             v => v !== v2 );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        v => v !== v1 );     
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

// const graph = new GeneralGraph();
// for(let i = 0 ; i < 7 ; i++ ){
//     graph.addVertex(i);
// }
// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(1, 0);
// graph.addEdge(0, 4);
// graph.addEdge(3, 4);
// graph.addEdge(3, 5);
// graph.addEdge(4, 5);
// graph.addEdge(5, 6);
// graph.showGraph();


module.exports = {
    GeneralGraph,
};
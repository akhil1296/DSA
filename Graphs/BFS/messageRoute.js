const { GeneralGraph } = require('../generalGraph');

class MessageRoute {
    constructor(){
        this.adjacencyList = {};
    }
    buildGraph(n, edges) {
        const graph = new GeneralGraph();
        for (let i = 1; i <= n; i++) {
            graph.addVertex(i);
        }
        for( let [u, v] of edges){
            graph.addEdge(u, v);
        }
        this.adjacencyList = graph.getGraph();
    }
    findConnections(start, dest) {
        let queue = [];
        let visited = [];
        let dist = [];

        queue.push(start);
        visited[start] = true ;
        dist[start] = 0 ;

        while( queue.length ){
            let parent = queue.shift();
            this.adjacencyList[parent].forEach(neighbour => {
                if(!visited[neighbour]){
                    queue.push(neighbour);
                    visited[neighbour] = true;
                    dist[neighbour] = dist[parent] + 1 ;
                }
            });
        }
        return dist[dest];
    }
}
let n = 5;
let edges = [[1, 2], [1, 3], [1, 4], [2, 3], [5, 4]];
const obj = new MessageRoute();
obj.buildGraph(n, edges);
let res = obj.findConnections(1, 5);
if(!res){
    res = -1 ;
}
console.log(res);
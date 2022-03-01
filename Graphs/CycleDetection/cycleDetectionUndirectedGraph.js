const { GeneralGraph }  = require('../generalGraph');
const graph = new GeneralGraph();

class CycleDetectionUndirectedGraph{
    isCyclicUtil(node, visited, parent){
        visited[node] = true ;

        for( let i = 0 ; i < this.adjList[node].length ; i++ ){
            let child = this.adjList[node][i];
            if(!visited[child]){
                let cycleDetected = this.isCyclicUtil(child, visited, node);
                if(cycleDetected){
                    return true;
                }
            }
            else if(child !== parent){
                return true;
            }
        }
        return false;
    }
    findCycle(adjList, n){
      this.adjList = adjList ;
      let visited = new Array(n).fill(false);
      let parent = -1 ;
      for (let i = 0; i < n; i++) {
         if(!visited[i]){
             if(this.isCyclicUtil(i, visited, parent)){
                 return true;
             }
         }
      }
      return false;
    }
}

let adjList = graph.getGraph();
let n = 6 ;
for(let i = 0 ; i < n ; i++ ){
    graph.addVertex(i);
}
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(0, 4);
graph.addEdge(0, 5);
graph.addEdge(4, 5);
 
const obj = new CycleDetectionUndirectedGraph();
let res = obj.findCycle(adjList, n);
console.log(res);


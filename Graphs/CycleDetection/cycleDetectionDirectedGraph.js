const { CyclicGraph }  = require('../cyclicGraph');
const graph = new CyclicGraph();

class CycleDetectionDirectedGraph{
    isCyclicUtil(node, visited, stack){
        // return true if back edge is found
        visited[node] = true ;
        stack[node] = true ;
        
        for(let i = 0 ; i < this.adjList[node].length ; i++ ){
            let child = this.adjList[node][i];
            if(stack[child]){
                return true;
            }
            else if(!visited[child]){
                let cycleFound = this.isCyclicUtil(child, visited, stack);
                if(cycleFound){
                    return true;
                }
                stack.pop();
            }
        }
        stack[node] = false ;
        return false;
    }
    // Just a wrappper Function
    findCycle(adjList, n){
      this.adjList = adjList ;
      let visited = new Array(n).fill(false);
      let stack = new Array(n).fill(false);
      for (let i = 0; i < n; i++) {
         if(!visited[i]){
             if(this.isCyclicUtil(i, visited, stack)){
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
graph.addEdge(2, 3);
graph.addEdge(3, 0);
graph.addEdge(0, 4);
graph.addEdge(0, 5);
graph.addEdge(5, 4);
 
const obj = new CycleDetectionDirectedGraph();
let res = obj.findCycle(adjList, n);
console.log(res);


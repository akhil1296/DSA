const { CyclicGraph }  = require('../cyclicGraph');
const graph = new CyclicGraph();

class GenericCycleDetection{
    constructor(n){
        this.visited =  new Array(n).fill(0);
        this.parent = new Array(n).fill(-1);
        this.cycleFound = false ;
    }
    dfs(node, parent){
        // return true if back edge is found
        this.visited[node] = 1 ;
        this.parent[node] = parent ;
        
        for(let i = 0 ; i < this.adjList[node].length ; i++){
            let child = this.adjList[node][i] ;
            if(this.visited[child] === 0){
                this.dfs(child, node);
            }
            else if(child !== parent && this.visited[child] === 1){
                this.cycleFound = true ;
                let v =  child ; let u = node ;
                console.log("printing cycle", this.parent, u, v);
                while( u !== v ){
                    console.log(u, ' -> ');
                    u = this.parent[u];
                }
                
                return ;
            }
        }
        this.visited[node] = 2 ;
        return;
    }
    // Just a wrappper Function
    findCycle(adjList, n){
      this.adjList = adjList ;
         
      for (let i = 0; i < n; i++) {
         if(this.visited[i] === 0){
             this.dfs(i, this.parent[i]);
         }
      }
      return this.cycleFound;
    }
}

let adjList = graph.getGraph();
let n = 2 ;
for(let i = 0 ; i < n ; i++ ){
    graph.addVertex(i);
}
graph.addEdge(0, 1);
graph.addEdge(1, 0);

// graph.addEdge(1, 2);
// graph.addEdge(2, 3);
// graph.addEdge(3, 0);
// graph.addEdge(0, 4);
// graph.addEdge(0, 5);
// graph.addEdge(5, 4);
 
const obj = new GenericCycleDetection(n);
let res = obj.findCycle(adjList, n);
console.log("Cycle Found : ",res);


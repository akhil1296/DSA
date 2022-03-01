const { GeneralGraph }  = require('../generalGraph');
const graph = new GeneralGraph();

class ShortestCycle{
    shortestCycle(adjList, n){

    let ans = Number.MAX_VALUE;
    for(let i = 0 ; i < n ; i++){
         let dist = new Array(n).fill(Number.MAX_VALUE);
         let parent = new Array(n).fill(-1);

         // Distance of source to source is 0
         dist[i] = 0 ;
         let queue = [];
         queue.push(i);

        while(queue.length){
            let node = queue.shift();

            adjList[node].forEach(child => {
                if(dist[child] === Number.MAX_VALUE){
                    dist[child] = dist[node] + 1 ;
                    parent[child] = node ;
                    queue.push(child);
                }
                else if( child !== parent[node] && parent[child] !== node){
                    ans = Math.min(ans, dist[child] + dist[node] + 1);
                }
            });
        }
        console.log(i, ans);
    }
    if(ans === Number.MAX_VALUE){
        return -1;
    }
    else{
        return ans;
    }
   }
}

let adjList = graph.getGraph();
let n = 7 ;
for(let i = 0 ; i < n ; i++ ){
    graph.addVertex(i);
}
graph.addEdge(0, 6);
graph.addEdge(0, 5);
graph.addEdge(5, 1);
graph.addEdge(1, 6);
graph.addEdge(2, 6);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 1);
 
const obj = new ShortestCycle();
let res = obj.shortestCycle(adjList, n);
console.log(res);


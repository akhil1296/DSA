const { WeightedGraphs } = require('../WeightedGraphs');
const { PriorityQueue } = require('../../Heap/basicPQ');

const graph = new WeightedGraphs();
const PQ = new PriorityQueue();

class Prim{ 

    mst(adj, n){
        let visited = new Array(n).fill(false);
        let ans = 0 ;
        PQ.enqueue(0,0);

        while(PQ.queue.length){
            let parent = PQ.queue.shift();
            let to = parent.val ;
            let weight = parent.priority ;

            if(visited[to]){
                continue ;
            }

            ans = ans + weight ;
            visited[to] = true ;
             
            adj[to].forEach(child => {
                if(!visited[child.node]){
                    PQ.enqueue(child.node, child.weight);
                }
            });

        }
        return ans ;
    }
}



let n = 10 ;
for(let i = 0 ; i < n ; i++){
    graph.addVertex(i);
}
// graph.addEdge(0, 1, 1);
// graph.addEdge(0, 3, 2);
// graph.addEdge(0, 2, 2);
// graph.addEdge(1, 2, 2);
// graph.addEdge(2, 3, 3);

graph.addEdge(0, 5, 10);
graph.addEdge(0, 1, 28);
graph.addEdge(4, 5, 25);
graph.addEdge(4, 6, 24);
graph.addEdge(1, 6, 14);
graph.addEdge(1, 2, 16);
graph.addEdge(2, 3, 12);
graph.addEdge(4, 3, 22);
graph.addEdge(3, 6, 18);

let adj = graph.getGraph();

const obj = new Prim();
let res = obj.mst(adj, n);
console.log("res : ",res);

module.exports = {
    Prim,
};
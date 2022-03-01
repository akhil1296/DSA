const { CyclicGraph } = require('../cyclicGraph');
const graph = new CyclicGraph();

class TopologicalSorting {
    constructor(){
        this.res = [];
    }
    sort(adjList, n) {
        let indegree = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            adjList[i].forEach(element => {
                indegree[element] = indegree[element] + 1 ;
            });
        }
        
        this.bfs(adjList, indegree);
        return this.res;
    }
        // Using BFS
    bfs(adjList, indegree){
        let queue = [];
        
        indegree.forEach((degree, index)=>{
            if(degree === 0){
                queue.push(index);
            }
        });
        
       while(queue.length){
            let parent = queue.shift();
            this.res.push(parent);
            
            adjList[parent].forEach((child)=>{
 
                indegree[child] = indegree[child] - 1;

                if(indegree[child] === 0){
                    queue.push(child);
                }
                
            });
        }
    }
}

let n = 2;
for (let i = 0; i < n; i++) {
    graph.addVertex(i);
}

graph.addEdge(0, 1);
graph.addEdge(1, 0);
// graph.addEdge(1, 4);
// graph.addEdge(4, 5);
// graph.addEdge(2, 3);
// graph.addEdge(3, 5);

// graph.addEdge(5, 0);
// graph.addEdge(5, 2);
// graph.addEdge(4, 0);
// graph.addEdge(4, 1);
// graph.addEdge(2, 3);
// graph.addEdge(1, 3);

let adjList = graph.getGraph();
const obj = new TopologicalSorting();
let res = obj.sort(adjList, n);
console.log(res);


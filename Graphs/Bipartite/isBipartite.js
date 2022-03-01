const { GeneralGraph }  = require('../generalGraph');
const graph = new GeneralGraph();

class Bipartite{
    isBipartite(adjList, n){
        let visited = new Array(n).fill(0);
        let parent = -1 ;
        let colour = 1 ;
        for(let i = 1 ; i <= n ; i++){
            if(visited[i] === 0){
                if(!this.isBipartiteUtil(i, parent, visited, adjList, n, colour)){
                    return false;
                }
            }
        }
        return true;
    }
    isBipartiteUtil(node, parent, visited, adjList, n, colour){
        visited[node] = colour ;
        for(let i = 0 ; i < adjList[node].length ; i++){
            let child = adjList[node][i];
            if(visited[child] === 0){
                let cycleDetected = this.isBipartiteUtil(child ,node, visited, adjList, n, 3-colour);
                if(!cycleDetected){
                    return false;
                }
            }
            else if( child !== parent && visited[child] === colour){
                return false;
            }
        }
        return true;
    }
}

let adjList = graph.getGraph();
let n = 4 ;
for(let i = 1 ; i <= n ; i++ ){
    graph.addVertex(i);
}

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

const obj = new Bipartite();
let res = obj.isBipartite(adjList, n);
console.log(res);

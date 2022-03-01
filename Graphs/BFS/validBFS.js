class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = [];
        }
    }
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}
class ValidBFS{
    find(n, edges, bfs){
        const graph = new Graph();
        for( let i = 1 ; i <= n ; i++ ){
            graph.addVertex(i);
        }
        for(const[u,v] of edges){
            graph.addEdge(u, v);
        }
        let adjList = graph.adjacencyList;
        
        // main code
        let queue = [];
        let visited = [];
        let firstElementInGivenBFS = bfs[0];
        queue.push(firstElementInGivenBFS);
        visited[firstElementInGivenBFS] = true;

        let y = 1 ;
        let flag = true ;

        while(queue.length){
            let parent = queue.shift();
            let s = new Set(); // set of neighbours

           adjList[parent].forEach(neighbour => {
               if(!visited[neighbour]){
                   visited[neighbour] = true;
                   s.add(neighbour);
               }
           });
        
        while(s.size){
            if(!s.has(bfs[y])){
                flag = false;
                break;
            }
            s.delete(bfs[y]);
            queue.push(bfs[y]);
            y++;
        }
        if(flag === false){
            break;
        }
        }
        return flag ? true : false ;
    }
}

let n = 4 ;
let edges = [[1,2], [1,3], [2,4]];
// let bfs = [1, 2, 4, 3]; // false
let bfs = [1, 2, 3, 4]; // true
const obj = new ValidBFS();
let res = obj.find(n, edges, bfs);
console.log(res);
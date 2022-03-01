class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(u, v){
        this.adjacencyList[u].push(v);
        // this.adjacencyList[v].push(u);
    }
    minCostBFS(src, dest){
        let queue = [];
        let visited = [];
        let dist = [];

        queue.push(src) ;
        visited[src] = true ;
        dist[src] = 0 ;
        while(queue.length){
            let parent = queue.shift();
            this.adjacencyList[parent].forEach( neighbour => {
               if(!visited[neighbour]){
                   queue.push(neighbour);
                   visited[neighbour] = true ;
                   dist[neighbour] = dist[parent] + 1 ;
               }
           });
        }
        return dist[dest];
    }
}
class SnakeAndLadderBFS{
    minDiceThrows(snakes, ladders, n){
        let board = new Array(n).fill(0); 
        for(const[u,v] of snakes){
            let s = u - 1;
            let e = v - 1;
            board[s] = e - s ;
        }
        for(const[u,v] of ladders){
            let s = u - 1;
            let e = v - 1;
            board[s] = e - s ;
        }
        const graph = new Graph();
        for(let i = 0 ; i < n ; i++ ){
            graph.addVertex(i);
        }
        for(let u = 0 ; u < n ; u++ ){
            for(let dice = 1 ; dice <= 6 ; dice ++){
                let v = u + dice ;
                v = v + board[v] ;
                if(v <=n ){
                    graph.addEdge(u, v);
              }
           }
        }
        return graph.minCostBFS(0, n-1);
    }
}

const snake = [[17, 4], [20, 6], [34, 12], [24, 16], [32, 30]];
const ladders = [[2, 15],[5, 7], [9, 27], [18, 29], [25, 35]];
let n = 36 ;
const obj = new SnakeAndLadderBFS();
let res = obj.minDiceThrows(snake, ladders, n);
console.log(res);

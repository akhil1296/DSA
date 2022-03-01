class ArticulationPoint{
    constructor(n, adj){
        this.n = n ;
        this.adj = adj ;
        this.visited = new Array(n).fill(false) ;
        this.disc = new Array(n).fill(0) ;
        this.lowTime = new Array(n).fill(0) ;
        this.parent = new Array(n).fill(0) ;
        this.time = 1 ;
        this.AP = new Set(); // Articulation Point
        this.bridges = [];
    }
    dfs(curr, parent){
        this.visited[curr] = true ;
        this.parent[curr] = parent ;
        this.disc[curr] = this.lowTime[curr] = this.time++;
        let child = 0 ;

        for(let i = 0 ; i < this.adj[curr].length ; i++){
            child++;
            let x = this.adj[curr][i]; // child of current
            if(!this.visited[x]){
                this.dfs(x, curr);
                this.lowTime[curr] = Math.min(this.lowTime[curr], this.lowTime[x]);
                if(this.lowTime[x] > this.disc[curr]){
                    this.bridges.push([x, curr]);
                }
                if(parent !== 0 && this.lowTime[x] >= this.disc[curr]){
                    this.AP.add(curr);
                }
            }
            else if( x !== parent ){
                // back edge exists
                this.lowTime[curr] = Math.min(this.lowTime[curr], this.disc[x]);
            }
        }

        if(parent === 0 && child > 1){ // Root node
            this.AP.add(curr);
        }
    }
    main(){
        for(let i = 1 ; i <= this.n ; i++){
            if(!this.visited[i]){
                // sending the parent as 0, considering it is connected graph
                this.dfs(i, this.parent[i]);
            }
        }
        console.log("Articulation Point : ", this.AP);
        console.log("Bridges : ", this.bridges);
        
    }
}

class Graph{
    constructor(){
        this.adj = {};
    }
    addVertex(i){
        if(!this.adj[i]){
            this.adj[i] = [];
        }
    }
    addEdge(u, v){
        this.adj[u].push(v);
        this.adj[v].push(u);
    }
    getGraph(){
        return this.adj;
    }
}

// let n = 6 ; 
// let n = 8 ;
let n = 5 ;
const obj = new Graph();
for(let i = 1 ; i <= n ; i++){
    obj.addVertex(i);
}

// obj.addEdge(1, 2);
// obj.addEdge(2, 3);
// obj.addEdge(2, 4);
// obj.addEdge(3, 4);
// obj.addEdge(4, 5);
obj.addEdge(1, 2);
obj.addEdge(2, 3);
obj.addEdge(3, 4);
obj.addEdge(4, 5);
obj.addEdge(3, 5);
// obj.addEdge(1, 2);
// obj.addEdge(1, 3);
// obj.addEdge(2, 4);
// obj.addEdge(2, 5);
// obj.addEdge(3, 6);
// obj.addEdge(4, 5);
// obj.addEdge(4, 7);
// obj.addEdge(5, 7);
// obj.addEdge(7, 8);
// obj.addEdge(5, 6);

// obj.addEdge(1, 2);
// obj.addEdge(1, 6);
// obj.addEdge(2, 3);
// obj.addEdge(2, 6);
// obj.addEdge(3, 4);
// obj.addEdge(3, 6);
// obj.addEdge(4, 5);
// obj.addEdge(4, 6);
// obj.addEdge(5, 6);
// obj.addEdge(5, 6);

const ss = new ArticulationPoint(n, obj.getGraph());
ss.main();

module.exports = { 
    ArticulationPoint,
 } ;
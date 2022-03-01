/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
 var criticalConnections = function(n, connections) {

    const graph = new Graph();
    
    for(let i = 0 ; i < n ; i++){
        graph.addVertex(i);
    }
    
    for(const [u, v] of connections){
        graph.addEdge(u, v);
    }
    let adj = graph.getGraph();
    const obj = new Connection(n, adj);
    let ans = obj.main();
    
    return ans;
};

class Connection{
    constructor(n, adj){
        this.n = n ;
        this.adj = adj ;
        this.disc = new Array(n).fill(0);
        this.parent = new Array(n).fill(-1);
        this.lowTime = new Array(n).fill(0);
        this.visited = new Array(n).fill(false);
        this.time = 1 ;
        this.bridges = [];
    }
    dfs(curr, parent){
        this.visited[curr] = true ;
        this.parent[curr] = parent ;
        this.lowTime[curr] = this.disc[curr] = this.time++;
        
        for(let i = 0 ; i < this.adj[curr].length ; i++){
            let x = this.adj[curr][i];
            if(!this.visited[x]){
                this.dfs(x, curr);
                this.lowTime[curr] = Math.min(this.lowTime[curr], this.lowTime[x]);
                if(this.lowTime[x] > this.disc[curr]){
                    this.bridges.push([x, curr]);
                }
            }
            else if(x !== parent){
              this.lowTime[curr] = Math.min(this.lowTime[curr], this.disc[x]);
           }
        }
    }
    main(){
        for(let i = 0 ; i < this.n ; i++){
            if(!this.visited[i]){
                this.dfs(i, this.parent[i]);
            }
        }
        return this.bridges;
    }
}

class Graph{
    constructor(){
        this.adj = {};
    }
    addVertex(i){
        if(!this.adj[i]){
            this.adj[i] = []
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
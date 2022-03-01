class BobAndDestructiveMind {
    constructor(n, adj){
        this.n = n ;
        this.adj = adj ;
        this.visited = new Array(n).fill(false) ;
        this.disc = new Array(n).fill(0) ;
        this.lowTime = new Array(n).fill(0) ;
        this.parent = new Array(n).fill(0) ;
        this.time = 1 ;
        this.AP = new Set(); // Articulation Point
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
    main(queries) {
        for (let i = 1; i <= this.n; i++) {
            if (!this.visited[i]) {
                this.dfs(i, this.parent[i]); // Considering the graph is a connected component
            }
        }
        console.log(this.AP);
        let ans = [];
        queries.forEach(query => {
            if (this.AP.has(query)) {
                ans.push(true);
            }
            else {
                ans.push(false);
            }
        });
        console.log(ans);
    }
}

class Graph {
    constructor() {
        this.adj = {};
    }
    addVertex(i) {
        if (!this.adj[i]) {
            this.adj[i] = [];
        }
    }
    addEdge(u, v) {
        this.adj[u].push(v);
        this.adj[v].push(u);
    }
    getGraph() {
        return this.adj;
    }
}


let n = 5;
const obj = new Graph();
for (let i = 1; i <= n; i++) {
    obj.addVertex(i);
}

obj.addEdge(1, 2);
obj.addEdge(2, 3);
obj.addEdge(3, 4);
obj.addEdge(4, 5);
obj.addEdge(3, 5);


let queries = [1, 2, 3, 4, 5]; // Bob will delete each node
const ss = new BobAndDestructiveMind(n, obj.getGraph());
ss.main(queries);

module.exports = {
    BobAndDestructiveMind,
};
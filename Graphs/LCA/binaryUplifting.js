class BinaryUplifting {
    constructor(n) {
        this.adj = {};
        this.m = 20 ;
        this.depth = new Array(n).fill(0);
        this.parent = new Array(n).fill(0).map(()=> new Array(this.m).fill(0));
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
    main(n, edges) {
        for (let i = 1; i <= n; i++) {
            this.addVertex(i);
        }
        for (const [u, v] of edges) {
            this.addEdge(u, v);
        }
        this.dfs(1, 0);
        // return this.lca(3, 4);
    }
    dfs(curr, parent) {
        this.depth[curr] = this.depth[parent] + 1;
        this.parent[curr][0] = parent;
        
        for (let j = 1; j < this.m; j++) {
            this.parent[curr][j] = this.parent[this.parent[curr][j-1]][j-1];
        }
        
        for (let i = 0; i < this.adj[curr].length; i++) {
            let x = this.adj[curr][i];
            if (x !== parent) {
               this.dfs(x, curr);
            }
        }
    }
    lca(u, v) {
        if (u === v) {
            return;
        }
        if (this.depth[u] < this.depth[v]) {
            [u, v] = [v, u]; // swap u and v
        }
        let diff = this.depth[u] - this.depth[v];

        for(let j = this.m-1 ; j >= 0 ; j--){
            if(((diff >> j) & 1) !== 0){
                u = this.parent[u][j];
            }
        }
        
        for(let j = this.m-1 ; j >= 0 ; j--){
            if(this.parent[u][j] !== this.parent[v][j]){
                u = this.parent[u][j];
                v = this.parent[v][j];
            }
        }
        return this.parent[u][0];
    }
}

let n = 5;
let edges = [[1, 2], [1, 3], [2, 4], [2, 5]];
const obj = new BinaryUplifting(n);
let ans = obj.main(n, edges);
console.log(ans);

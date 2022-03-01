class Subtree{
    constructor(){
        this.adj = {};
    }
    addVertex(i){
        if(!this.adj[i]){
            this.adj[i] = [] ;
        }
    }
    addEdge(u, v){
        this.adj[u].push(v);
        this.adj[v].push(u);
    }
    main(n, edges, queries){
        for(let i = 0 ; i < n ; i++ ){
            this.addVertex(i+1);
        }
        for(const [u, v] of edges){
            this.addEdge(u, v);
        }
        this.child = new Array(n+1).fill(1);
        this.visited = new Array(n+1).fill(false);
        this.dfs(1);
        return this.child.slice(1);
    }
    dfs(curr){
        this.visited[curr] = true ;
        for(let i = 0 ; i < this.adj[curr].length ; i++){
            let x = this.adj[curr][i];
            if(!this.visited[x]){
                this.dfs(x);
                this.child[curr] = this.child[curr]  + this.child[x]  ;
            }
        }
        
    }
}
let n = 5 ;
let edges = [[1,2], [1,3], [3,4], [3,5]];
let queries = [ 1, 2, 3, 4, 5 ] ;
// ans :  5 1 3 1 1
const obj = new Subtree();
let ans = obj.main(n, edges, queries);
console.log(ans);

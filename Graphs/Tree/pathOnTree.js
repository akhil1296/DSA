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
        this.adj[u].push({node : v, w : 1});
        this.adj[v].push({node : u, w : 1});
    }
    main(n, k, edges, queries){
        for(let i = 0 ; i < n ; i++ ){
            this.addVertex(i+1);
        }
        for(const [u, v] of edges){
            this.addEdge(u, v);
        }
        this.dist = new Array(n+1).fill(0);
        this.dfs(k,0,0);

        let ans = [];
        for(const [u, v] of queries){
            ans.push(this.dist[u] + this.dist[v]);
        }
        return ans;
    }
    dfs(curr, parent, w){
        this.dist[curr] = w ;
        
        for(let i = 0 ; i < this.adj[curr].length ; i++){
            let child = this.adj[curr][i];
            let wt = child.w ;
            if(child.node !== parent){
                this.dfs(child.node, curr, w + wt);
            }
        }
    }
}
let n = 5 ; 
let k = 1 ;
let edges = [[1,2], [1,3], [2,4], [3,5]]; // Given weight as 1 
let queries = [[2, 4], [2, 3], [4, 5]] ;
// ans :  3 2 4
const obj = new Subtree();
let ans = obj.main(n, k, edges, queries);
console.log(ans);

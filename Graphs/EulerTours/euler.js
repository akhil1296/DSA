class Euler{
    constructor(n){
        this.adj = {};
        this.tin = new Array(n+1).fill(0);
        this.tout = new Array(n+1).fill(0);
        this.flat = new Array(n+1).fill(0);
        this.time = 0 ;
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
    main(n, edges){
        for(let i = 1 ; i <= n ; i++ ){
            this.addVertex(i);
        }
        for(const [u, v] of edges){
            this.addEdge(u, v);
        }
        this.dfs(1, 0);
        for(let i = 1 ; i <= n ; i++ ){
            this.flat[this.tin[i]] = i ;
        }
        console.log(this.flat.slice(1));

        // lets get the subtree of k
        let k = 1 ;
        let tin = this.tin[k] ; 
        let tout = this.tout[k] ;
        let range = this.flat.slice(tin+1, tout+1);
        console.log(range);
    }
    dfs(curr, parent){
        this.tin[curr] = ++this.time;
        for(let i = 0 ; i < this.adj[curr].length ; i++){
            let x = this.adj[curr][i];
            if(x !== parent){
                this.dfs(x, curr);
            }
        }
        this.tout[curr] = this.time;
    }
}

let n = 5 ;
let edges = [[1, 2], [1, 3], [2, 4], [2, 5]];
const obj = new Euler(n);
let ans = obj.main(n, edges);
// console.log(ans);

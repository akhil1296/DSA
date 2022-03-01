class RerootingTree{
    constructor(n){
        this.adj = {};
        this.dp = new Array(n).fill(0);
        this.sub = new Array(n).fill(0);
        this.ans = 0 ;
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
    dfs(curr, par){
        this.sub[curr] = 1 ;
        this.dp[curr] = 0 ;

        this.adj[curr].forEach(x => {
            if(x !== par){
                this.dfs(x, curr);
                this.dp[curr] += this.dp[x] ;
                this.sub[curr] += this.sub[x] ;  
            }
        });
        this.dp[curr] += this.sub[curr];
        return;
    }
    dfs1(curr, par){
        this.ans = Math.max(this.ans, this.dp[curr]) ;
        this.adj[curr].forEach(x => {
            if(x !== par){
                // Detaching the curr and x
                this.dp[curr] -= this.dp[x] ;
                this.dp[curr] -= this.sub[x] ;
                this.sub[curr] -= this.sub[x] ;
                // Attaching the curr and x
                this.sub[x] += this.sub[curr] ;
                this.dp[x] += this.dp[curr] ;
                this.dp[x] += this.sub[curr] ;
               
                this.dfs(x, curr);
                // unfolding
                this.dp[curr] += this.dp[x] ;
                this.dp[curr] += this.sub[x] ;
                this.sub[curr] += this.sub[x] ;
                this.sub[x] -= this.sub[curr] ;
                this.dp[x] -= this.dp[curr] ;
                this.dp[x] -= this.sub[curr] ;
            }
        });
    }
    main(n, edges){
        for(let i = 1 ; i <= n ; i++ ){
            this.addVertex(i);
        }
        for(const [u, v] of edges){
            this.addEdge(u, v);
        }
        

        this.dfs(1, 0) ;
        this.dfs1(1, 0) ;
        console.log(this.sub);
        return this.ans;
    }
}

let n = 5 ;
let edges = [[1, 2], [1, 3], [2, 4], [2, 5]];

const obj = new RerootingTree(n);
let ans = obj.main(n, edges);
console.log(ans);
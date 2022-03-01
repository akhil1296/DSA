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
    main(n, edges){
        for(let i = 0 ; i < n ; i++ ){
            this.addVertex(i);
        }
        for(const [u, v] of edges){
            this.addEdge(u, v);
        }
        this.visited = new Array(n).fill(false);
        this.dfs(1, 0, 5);
        return this.res;
    }
    dfs(curr, dis, end){
        if(this.visited[curr]){
            return;
        }
        this.visited[curr] = true ;
        if(dis + 1 > this.res){
            this.res = dis ;
        }
        for(let i = 0 ; i < this.adj[curr].length ; i++){
            let child = this.adj[curr][i];
                this.dfs(child, dis+1, end);
        }
    }
}
let n = 6 ; 
let edges = [[0,1],[1,2],[2,3],[1,4],[4,5]] ; 

const obj = new Subtree();
let ans = obj.main(n, edges);
console.log(ans);

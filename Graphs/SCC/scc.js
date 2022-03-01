class StronglyConnectedComponents{
    constructor(n, adj1, adj2){
        this.n = n ;
        this.adj1 = adj1;
        this.adj2 = adj2;
        this.visited = new Array(n+1).fill(false);
        this.order = []; // contains the topological order
        this.color = new Array(n+1);
    }
    dfs1(curr){
        this.visited[curr] = true ;
        for(let i = 0 ; i < this.adj1[curr].length ; i++){
            let child = this.adj1[curr][i];
            if(!this.visited[child]){
                this.dfs1(child);
            }
        }
        this.order.unshift(curr); // ideally shud have pushed and then reversed the order
    }
    dfs2(curr, comp){
        this.visited[curr] = true ;
        this.color[curr] = comp;
        for(let  i = 0 ; i < this.adj2[curr].length ; i++){
            let child = this.adj2[curr][i];
            if(!this.visited[child]){
                this.dfs2(child, comp);
            }
        }
    }
    main(){
        // Iterating over the Graph G
        for(let i = 1 ; i <= this.n ; i++ ){
            if(!this.visited[i]){
                this.dfs1(i);
            }
        }
        
        this.visited = new Array(n+1).fill(false); // Marking them as false again
        // Now we have the topological order so will iterate over that
        console.log("Topological Order : ", this.order);
        let comp = 1 ;
        for(let i = 0 ; i < this.order.length ; i++){
            let x = this.order[i] ;
            if(!this.visited[x]){
                // DFS Over the reverse graph
                this.dfs2(x, comp++);
            }
        }
        console.log("Colored Nodes : ", this.color.splice(1, n));
        console.log("Total Strongly Connected Components : ", comp-1);
        return comp-1;
    }
}
class DirectedGraph{
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
    }
    getGraph(){
        return this.adj;
    }
}

const graph = new DirectedGraph();
let n = 9 ;
let edges = [[1, 2], [2, 3], [3, 1], [3, 4], [4, 5], [5, 6], [6, 4], [7, 2], [7, 8], [8, 9], [9, 7]] ;

// let n = 4 ;
// let edges = [[1,2], [2,3], [3,1], [3, 4]];
for(let i = 1 ; i <= n ; i++){
    graph.addVertex(i);
}

for(const [u , v] of edges){
   graph.addEdge(u, v);
}
// Creating the reverse graph
const reverseGraph = new DirectedGraph();
for(let i = 1 ; i <= n ; i++){
    reverseGraph.addVertex(i);
}
for(const [u, v] of edges){
    reverseGraph.addEdge(v, u);
}
let adj1 = graph.getGraph();
let adj2 = reverseGraph.getGraph();

const obj = new StronglyConnectedComponents(n, adj1, adj2);
let ans = obj.main();
console.log(ans);

module.exports = {
    StronglyConnectedComponents,
    DirectedGraph,
};

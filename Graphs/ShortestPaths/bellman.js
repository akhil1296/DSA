class Bellman{
    flow(n, src, edges){
        let dist = new Array(n+1).fill(Number.MAX_VALUE);
        dist[src] = 0 ;
        for(let i = 0 ; i < n-1 ; i++){
            // relaxing the edges
            for(const [u, v, w] of edges){
                if(dist[u]  !== Number.MAX_VALUE && (dist[u] + w < dist[v])){
                    dist[v] = dist[u] + w ;
                }
            }
        }
        for(const [u, v, w] of edges){
            if(dist[u]  !== Number.MAX_VALUE && (dist[u] + w < dist[v])){
                console.log("Negative Cycle Found");
                return;
            }
        }
        return dist.slice(1, n+1);
    }
}

let n = 3 ;
let src = 1 ;
// let edges = [[1, 2, 3], [2, 3, 4], [3, 1, -10]];
let edges = [[1, 2, 3], [2, 3, 4], [1, 3, -10]];

const obj = new Bellman();
let ans = obj.flow(n, src, edges);
console.log(ans);
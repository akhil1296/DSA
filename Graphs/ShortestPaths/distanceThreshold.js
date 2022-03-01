/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
 var findTheCity = function(n, edges, distanceThreshold) {
    let grid = new Array(n).fill(Number.MAX_VALUE).map(()=> new Array(n).fill(Number.MAX_VALUE));
    
    for(const [u, v, w] of edges){
        grid[u][v] =  grid[v][u] = w ;
    }

    for(let i = 0 ; i < n ; i++){ 
          grid[i][i] = 0 ;
    }
    const graph = new Graph();
    let ans = graph.floydWarshall(n, grid, distanceThreshold);
    return ans;
    
};

class Graph{
    floydWarshall(n, dist, distanceThreshold){
        let count = 0 ;
        let min = Number.MAX_VALUE;
        let ans = 0 ;
        let reach = new Array(n);
        for(let k = 0 ; k < n ; k++){
           for(let i = 0 ; i < n ; i++){
              for(let j = 0 ; j < n ; j++){
                if(dist[i][j] > dist[i][k] + dist[k][j]){
                    dist[i][j] = dist[i][k] + dist[k][j] ;
                } 
              }
           }    
        }
        
        for(let i = 0 ; i < n ; i++){
              for(let j = 0 ; j < n ; j++){
                if(dist[i][j] <= distanceThreshold){
                    count++;
                } 
              }
            reach[i] = count ; 
            count = 0 ;
                        
            if(reach[i] <= min){
                min = reach[i] ;
                ans = i ;
            }
           }    
        return ans;
   }
}
let n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2 ;
// let n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4 ;
let ans = findTheCity(n, edges, distanceThreshold);
console.log(ans);
class FloydWarshall{
    shortestPath(n, dist){
        // phases in kth phase we included vertices(1...n) as intermediate vertices
        for(let k = 0 ; k < n ; k++){
            // Iterate over the entire 2d matrix
            for(let i = 0 ; i < n ; i++){
                
                for(let j = 0 ; j < n ; j++){
                    // if vertex k is included can we minimise the dist ?
                    if(dist[i][j] > dist[i][k] + dist[k][j]){
                        dist[i][j] = dist[i][k] + dist[k][j] ;
                    }
                }
            }   
        }
        // If distance of any vertex from itself
        // becomes negative, then there is a negative
        // weight cycle.
        for (let i = 0; i < n; i++){
            if (dist[i][i] < 0)
            {    console.log('Negative Cycle Found');
            }
        }
 
        return dist;
    }
}

let n = 4 ;
let mat = [ [0, Number.MAX_VALUE, -2, Number.MAX_VALUE],
            [4, 0, 3, Number.MAX_VALUE],
            [Number.MAX_VALUE, Number.MAX_VALUE, 0, 2],
            [Number.MAX_VALUE, -1, Number.MAX_VALUE, 0]
        ];
const obj = new FloydWarshall();
let ans = obj.shortestPath(n, mat);
console.log(ans);
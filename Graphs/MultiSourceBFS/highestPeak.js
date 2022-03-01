/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
 var highestPeak = function(isWater) {
    const obj = new Peak();
    let ans = obj.main(isWater);
    return ans;
};

class Peak{
    main(grid){
        let m = grid.length ;
        let n = grid[0].length ;
            
        let q = []; 
        
        for(let i = 0 ; i < m ; i++){
         for(let j = 0 ; j < n ; j++){
            if(grid[i][j]){
                grid[i][j] = 0 ;
                q.push({x : i, y : j, dist : 0});
                continue;
            }    
            grid[i][j] = -1 ;
         }   
        }
        let dx = [0, 0, 1, -1];
        let dy = [1, -1, 0, 0];

        while(q.length){
            let parentNode = q.shift();
            let x = parentNode.x ;
            let y = parentNode.y ;
            let dist = parentNode.dist;
            for(let k = 0 ; k < 4 ; k++){
                let nx = x + dx[k] ;
                let ny = y + dy[k] ;
                if(nx >= 0 && nx < m && ny >= 0 && ny < n && dist[nx][ny] === Number.MAX_VALUE){
                    grid[nx][ny] = dist[x][y] + 1 ;
                    q.push({x : nx, y : ny, dist : dist + 1});
                }
            }
        }
        return dist;
    }
}

let isWater = [[0,0],[1,1],[1,0]] ;
let ans = highestPeak(isWater);
console.log(ans);
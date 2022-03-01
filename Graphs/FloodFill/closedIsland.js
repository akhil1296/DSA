/**
 * @param {number[][]} grid
 * @return {number}
 */
 var closedIsland = function(grid) {
    let count = 0 ;
    let m = grid.length ;
    let n = grid[0].length ;
    
    if( m < 3 || n < 3 ){
        return 0;
    }
    
    for(let i = 1 ; i < m-1 ; i++){
        for(let j = 1 ; j < n-1 ; j++){
                  
            if(grid[i][j] === 0 && isValid(i, j, grid, m, n)){
                count++;
          
          }
        }    
    }
    return count ;
};

function isValid(x, y, grid, m, n){
    if(grid[x][y]){
        return true ;
    }
    if(x === 0 || y === 0 || x === m-1 || y === n-1){
         return false;
     }
    grid[x][y] = 1 ;
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let result = true ;
    for(let k = 0 ; k < 4 ; k++){
        let nx = x + dx[k] ;
        let ny = y + dy[k] ;
        
        if(!isValid(nx, ny, grid, m, n)) result = false
    }
    return result ;
}
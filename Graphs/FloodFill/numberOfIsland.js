/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let m  = grid.length;
    let n = grid[0].length;
    
    let count = 0 ;
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(grid[i][j] === "1"){
                count++;
                floodFill(i, j, grid, n, m);
            }
        }
    }
    return count;
};

function floodFill(x, y, grid, n, m){
    grid[x][y] = 0 ;
    
    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    
    for(let k = 0 ; k < 4 ; k++){
        let nx = x + dx[k] ;
        let ny = y + dy[k] ;
        if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === "1"){
            floodFill(nx, ny, grid, n, m);
        }
    }
}

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];

let res = numIslands(grid);
// check if 2 cells are in different island or same
/**
 *  [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,2,0,0],
    [0,0,0,3,3]
  ];
 */

class ColouringIslands{
    constructor(row, col){  
        this.row = row ;
        this.col = col ;
        this.visited = new Array(row).fill(false).map(()=>new Array(col).fill(false));
    }
    floodFill(x, y, colour, grid){
        this.visited[x][y] = true ;
        grid[x][y] = colour ;

        let dx = [0, 0, 1, -1];
        let dy = [1, -1, 0, 0];

        for(let k = 0 ; k < 4 ; k++){
            let nx = x + dx[k] ;
            let ny = y + dy[k] ;
            if(nx >= 0 && nx < this.row && ny >= 0 && ny < this.col && !this.visited[nx][ny] && grid[nx][ny] === 1){
                this.floodFill(nx, ny, colour, grid);
            }
        }

    }
    main(grid, x1, y1, x2, y2){
        let m = grid.length;
        let n = grid[0].length; 
        let count = 0 ;
        for(let i = 0 ; i < m ; i++){
            for(let j = 0 ; j < n ; j++){
                if(grid[i][j] === 1 && !this.visited[i][j]){
                    count++;
                    this.floodFill(i, j, count, grid);
                }
            }    
        }
        console.log(grid);
        if(grid[x1][y1] === grid[x2][y2]){
            return true;
        }
        return false;
    }
}

let grid = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
  ];

let m = grid.length;
let n = grid[0].length; 
const obj = new ColouringIslands(m,n);
// [[0][1]], [[0][2]] - false
let x1 = 3 , y1 = 3, x2 = 3, y2 = 4 ;
let res = obj.main(grid, x1, y1, x2, y2);
console.log(res);
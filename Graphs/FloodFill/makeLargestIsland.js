// check if 2 cells are in different island or same
/**
 *  [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,2,0,0],
    [0,0,0,3,3]
  ];
 */

  class MakeLargestIsland{
    constructor(row, col){  
        this.row = row ;
        this.col = col ;
        this.colourCount = 0;
        this.colourCountArray = [];
        this.visited = new Array(row).fill(false).map(()=>new Array(col).fill(false));
    }
    floodFill(x, y, colour, grid){
        this.visited[x][y] = true ;
        grid[x][y] = colour ;
        this.colourCount++;

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
    main(grid){
        let m = grid.length;
        let n = grid[0].length; 
        let dx = [0, 0, 1, -1];
        let dy = [1, -1, 0, 0];

        let count = 0 ;
        for(let i = 0 ; i < m ; i++){
            for(let j = 0 ; j < n ; j++){
                if(grid[i][j] === 1 && !this.visited[i][j]){
                    count++;
                    this.floodFill(i, j, count, grid);
                    this.colourCountArray.push(this.colourCount);
                    this.colourCount = 0 ;
                }
            }    
        }
        
        let largest = 0 ;
        this.colourCountArray.forEach((element) =>{
            largest = Math.max(largest, element) ;
        });
         
        for(let i = 0 ; i < m ; i++){
            for(let j = 0 ; j < n ; j++){
                if(grid[i][j] === 0){
                    let set = new Set();
                     for(let k = 0 ; k < 4 ; k++ ){
                        let nx = i + dx[k] ;
                        let ny = j + dy[k] ;
                        if(nx >= 0 && nx < m && ny >= 0 && ny < n){
                            set.add(grid[nx][ny]);
                        }
                     }
                     let ans = 1 ;
                     set.forEach((element)=>{
                         if(element)
                             ans = ans + this.colourCountArray[element-1] ;
                     });
                     largest = Math.max(largest, ans) ;
                }
            }    
        }
        console.log(this.colourCountArray);
        return largest;
    }
}

// let grid = [
//     [1,1,0,0,0],
//     [1,1,0,0,0],
//     [0,0,1,0,0],
//     [0,0,0,1,1]
//   ];
let grid = [[1]] ;
let m = grid.length;
let n = grid[0].length; 
const obj = new MakeLargestIsland(m,n);

let res = obj.main(grid);
console.log(res);
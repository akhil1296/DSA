/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestBridge = function (grid) {
    const obj = new ShortestBridge();
    let ans = obj.main(grid);
    return ans;
};

class ShortestBridge {
    constructor(){
        this.dx = [0, 0, 1, -1];
        this.dy = [1, -1, 0, 0];
    }
    main(grid) {
        let m = grid.length;
        let n = grid[0].length;

        let arr1 = [] ;
        let arr2 = [] ;

        for(let i = 0 ; i < m ; i++ ){
            for(let j = 0 ; j < n ; j++ ){
                if(grid[i][j] === 1){
                    if(arr1.length === 0){
                        grid[i][j] = 2;
                        this.dfs(i, j, arr1, grid, m, n);
                    }
                    else{
                        grid[i][j] = 2;
                        this.dfs(i, j, arr2, grid, m, n);
                    }
                }
            }
        }
        let min = Number.MAX_VALUE ;
        for(let i = 0 ; i < arr1.length ; i++ ){
            for(let j = 0 ; j < arr2.length ; j++ ){
                let dist = Math.abs(arr1[i][0] - arr2[j][0]) + Math.abs(arr1[i][1] - arr2[j][1]) - 1 ;
                min = Math.min(dist, min);
            }
        }
        return min ;
    }
    dfs(x, y, arr, grid, m, n){
        arr.push([x,y]);
        for(let k = 0 ; k < 4 ; k++){
            let nx = x + this.dx[k] ;
            let ny = y + this.dy[k] ;
            if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1){
                grid[nx][ny] = 2 ;
                this.dfs(nx, ny, arr, grid, m, n);
            }
        }
        return;
    }
}
let grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]] ;
let ans = shortestBridge(grid);
console.log(ans);


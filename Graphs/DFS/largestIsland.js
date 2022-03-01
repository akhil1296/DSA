/**
 * 
 695. Max Area of Island
Medium

4219

119

Add to List

Share
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:


Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
Accepted
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    
    let m = grid.length;
    let n = grid[0].length;
    
    let visited = new Array(m).fill(false).map(()=> new Array(n).fill(false));
    let largest = 0 ;
    for( let i = 0 ; i < m ; i++ ){
        for( let j = 0 ; j < n ; j++ ){
           if(grid[i][j] === 1 && !visited[i][j]){ 
            let size = dfs(grid, visited, i, j, m, n);
            largest = Math.max(largest, size);
        }    
      }
    }
    return largest;
};

const dfs = (matrix, visited, i, j, m, n) =>{
    visited[i][j] = true;
    let res = 1 ;

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];
    
    for(let k = 0 ; k < 4 ; k++){
        let nx = i + dx[k];
        let ny = j + dy[k];
        if(nx>=0 && nx<m && ny>=0 && ny<n && matrix[nx][ny] === 1 && !visited[nx][ny]){
            let subComponent = dfs(matrix, visited, nx, ny, m, n);
            res = res + subComponent ;
        }
    }
    
    return res ;
};
let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
let ans = maxAreaOfIsland(grid);
console.log(ans);
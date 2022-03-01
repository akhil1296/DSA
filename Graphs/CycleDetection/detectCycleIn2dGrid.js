/**
 * 1559. Detect Cycles in 2D Grid
Hard

379

12

Add to List

Share
Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.

A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.

Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.

Return true if any cycle of the same value exists in grid, otherwise, return false.

 

Example 1:



Input: grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
Output: true
Explanation: There are two valid cycles shown in different colors in the image below:

Example 2:



Input: grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
Output: true
Explanation: There is only one valid cycle highlighted in the image below:

Example 3:



Input: grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
Output: false
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m <= 500
1 <= n <= 500
grid consists only of lowercase English letters.
 */

/**
 * @param {character[][]} grid
 * @return {boolean}
 */

 var containsCycle = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    if(m < 4 && n < 4){
        return false;
    }
    let visited =  new Array(m).fill(0).map(()=>new Array(n).fill(0));
    let colour = 1 ;
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ; j++){
            if(visited[i][j] === 0){
                if(dfsUtil(i, j, -1 ,-1, grid ,visited, colour, m, n)){
                    return true;
                }
            }
        }
    }
    return false;
};

function dfsUtil(i, j, px , py, grid, visited, colour, m, n){
    visited[i][j] = colour;
    
    let dx = [1 , -1 , 0 , 0];
    let dy = [0 , 0 , 1 , -1];
    for(let k = 0 ; k < 4 ; k++){
        let x = dx[k] + i;
        let y = dy[k] + j;
        if( x === px && y === py ){
            continue;
        }
        if(x>=0 &&  y>=0 && x<m && y<n && (grid[i][j] === grid[x][y])){
            if(visited[x][y] === 1){
                return true;
            }
            if(visited[x][y] === 0){
                if(dfsUtil(x, y, i, j, grid, visited, colour, m, n)){
                    return true;
                }
            }
            
        }
    }
    
    visited[i][j] = 2 ;
    return false;
}

 
let grid = [["e","d","d","d"],["b","a","a","b"],["e","b","e","a"],["c","e","a","d"]];
console.log(containsCycle(grid));

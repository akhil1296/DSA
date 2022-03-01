/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function (grid, row, col, color) {
    let m = grid.length;
    let n = grid[0].length;
    let visited = new Array(m).fill(false).map(()=>{
        new Array(n).fill(false)
    });
    let originalColour = grid[row][col];
    floodFill(grid, row, col, m, n, color, originalColour, visited);
    return grid;
};

const floodFill = (grid, row, col, m, n, color, originalColour, visited) => {

    if (row < 0 || row === m || col < 0 || col === n || (!visited[row][col] && grid[row][col] !== originalColour)) {
        return true;
    }
    if(visited[row][col]){
        return false;
    }
    visited[row][col] = true ;

    let dx = [0, 0, 1, -1];
    let dy = [1, -1, 0, 0];
    let count = 0;
    for (let k = 0; k < 4; k++) {
        let nx = row + dx[k];
        let ny = col + dy[k];
        if(nx >= 0 && nx < m && ny >= 0 && ny < n){
        let res = floodFill(grid, nx, ny, m, n, color, originalColour);
        if (res) {
            grid[nx][ny] = color ;
        }
    }
    }
return false;
};

let grid = [[1, 2, 1], [1, 2, 2], [2, 2, 1]], row = 1, col = 1, color = 2;
let res = colorBorder(grid, row, col, color);
console.log(res);


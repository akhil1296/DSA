/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    let n = grid.length;

    const obj = new Largest(n);
    let ans = obj.main(grid, n);
    return ans;
};

class Largest {
    constructor(n) {
        this.visited = new Array(n).fill(false).map(() => new Array(n).fill(false));
        this.colourCount = new Array(n * 2).fill(0);
    }
    main(grid, n) {
        let dx = [0, 0, 1, -1];
        let dy = [1, -1, 0, 0];
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] && !this.visited[i][j]) {
                    count++;
                    this.floodFill(i, j, grid, count, n);
                }
            }
        }
        let largest = 0;
        for (let i = 0; i < this.colourCount.length; i++) {
            largest = Math.max(largest, this.colourCount[i]);
        }
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    let set = new Set();
                    for (let k = 0; k < 4; k++) {

                        let nx = i + dx[k];
                        let ny = j + dy[k];

                        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                            set.add(grid[nx][ny]);
                        }
                    }
                    let ans = 1;
                    set.forEach((element) => {
                        if (element) {
                            ans = ans + this.colourCount[element];
                        }
                    });
                    largest = Math.max(largest, ans);
                }
            }
        }
        return largest;
    }
    floodFill(x, y, grid, count, n) {
        grid[x][y] = count;
        this.colourCount[count]++;
        this.visited[x][y] = true;

        let dx = [0, 0, 1, -1];
        let dy = [1, -1, 0, 0];

        for (let k = 0; k < 4; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];

            if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] && !this.visited[nx][ny]) {
                this.floodFill(nx, ny, grid, count, n);
            }
        }
    }
}

// let grid = [
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 1],
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0]
// ];
//let grid = [[1,1],[1,1]] ;
let grid = [[1]] ;
let m = grid.length;
let n = grid[0].length;

let res = largestIsland(grid);
console.log(res);
class SudokuSolver {
    solveSudoku(arr, i, j, n) {
        // base case
        if (i === n) {
            console.log("Solved sudoku :", arr);
            return true;
        }
        // rec case
        if (j === n) {
            return this.solveSudoku(arr, i + 1, 0, n);
        }
        // skip the prefilled cell
        if (arr[i][j] !== 0) {
            return this.solveSudoku(arr, i, j + 1, n);
        }
        // cell to be filled try out all possibilites
        for (let no = 1; no <= n; no++) {
            // if it is safe to place the number or not
            if (this.isSafe(arr, i, j, no, n)) {
                arr[i][j] = no ;
                let subProblem = this.solveSudoku(arr, i, j + 1, n);
                if (subProblem === true) {
                    return true;
                }
            }
        }
        // if no option works, backtrack
        arr[i][j] = 0;
        return false;
    }
    isSafe(arr, i, j, no, n) {
        // check for row and col
        for (let k = 0; k < n; k++) {
            if (arr[k][j] === no || arr[i][k] === no) {
                return false;
            }
        }
        // check for subgrid
        let sx = Math.floor(i / 3) * 3;
        let sy = Math.floor(j / 3) * 3;

        for (let x = sx; x < sx + 3; x++) {
            for (let y = sy; y < sy + 3; y++) {
                if (arr[x][y] === no) {
                    return false;
                }
            }
        }
        return true;
    }
}

const obj = new SudokuSolver();

let n = 9;
let mat =
    [[5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]];

if (!obj.solveSudoku(mat, 0, 0, n)) {
    console.log("No solution exists!");
}


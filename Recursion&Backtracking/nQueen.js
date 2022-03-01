class Nqueen {
    solveNqueen(n, board, i) {
        // base case
        if (i === n) {
            console.log("Solved NQueen", board);
            return;
        }
        // rec case
        // try to place queen in every row
        for (let j = 0; j < n; j++) {
            if (this.canPlace(n, board, i, j)) {
                board[i][j] = 1;
                let success = this.solveNqueen(n, board, i + 1);
                if (success) {
                    return true;
                }
                // backtrack
                board[i][j] = 0;
            }
            
        }
        return false;
    }
    canPlace(n, board, x, y) {
        // coloumn
        for (let k = 0; k < x; k++) {
            if (board[k][y] === 1) {
                return false;
            }
        }
        let i = x;
        let j = y;
        // left diag
        while (i >= 0 && j >= 0) {
            if (board[i][j] === 1) {
                return false;
            }
            i--; j--;
        }
        i = x;
        j = y;
        // right diag
        while (i >= 0 && j < n) {
            if (board[i][j] === 1) {
                return false;
            }
            i--; j++;
        }
        return true;
    }
}

let n = 4;
let board = new Array(n).fill(0).map(() => new Array(n).fill(0));
const obj = new Nqueen();
obj.solveNqueen(n, board, 0);
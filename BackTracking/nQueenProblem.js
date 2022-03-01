class NQueen{
    solveNQ(n){
        let board = new Array(n).fill(0).map(() => new Array(n).fill(0));
         
        if(this.solveNQUtil(board, 0, n) === false){
            console.log("Solution does not exist");
            return;
        }
        this.printBoard(board);
    }

    solveNQUtil(board, col, n){
        /* base case: If all queens are placed
           then return true */
        if(col >= n){
            return true;
        }
        for(let i = 0 ; i < n ; i++ ){
            /* Check if the queen can be placed on
               board[i][col] */
            if(this.isSafe(board, i, col, n)){
                /* Place this queen in board[i][col] */
                board[i][col] = 1;
                /* recur to place rest of the queens */
                if(this.solveNQUtil(board, col + 1, n) === true){
                    return true;
                }
                /* If placing queen in board[i][col]
                   doesn't lead to a solution then
                   remove queen from board[i][col] */
                board[i][col] = 0; //  BACKTRACK
            }
        }
        return false;
    }
    /* A utility function to check if a queen can
       be placed on board[row][col]. Note that this
       function is called when "col" queens are already
       placeed in columns from 0 to col -1. So we need
       to check only left side for attacking queens */
    isSafe(board, row, col, n){
        let i, j;
        console.log(row, col);
        /* Check this row on left side */
        for(i = 0 ; i < col ; i++){
            if(board[row][i] === 1){
                return false;
            } 
        }

        /* Check upper diagonal on left side */
        for(i = row ; j = col ; i >= 0 && j >= 0 , i-- , j--){
            if(board[i][j] === 1){
                return false;
            }
        }

        // /* Check lower diagonal on left side */
        // for(i = row ; j = col ; i < n  && j >= 0 , i++ , j--){
        //     if(board[i][j] === 1){
        //         return false;
        //     }
        // }
        return true;

    }

    printBoard(board){
        console.log(board);
    }
}

const solution = new NQueen();
let n = 4 ;
solution.solveNQ(n);
 
class MaxSum{
    constructor(n){
        this.dp = new Array(n).fill(-1).map(() => new Array(n).fill(-1));
    }
    start(matrix, n){
        let res = 0 ;
        for( let i = 0 ; i < n ; i++ ){
            res = Math.max(res, this.dfs(matrix, 0, i, n));
        }
        console.log(res);
    }   
    dfs(matrix, i, j, n){
        if ( i < 0 || j < 0 || i >= n || j >= n){
            return 0 ;
        }
        if(this.dp[i][j] !== -1){
            return this.dp[i][j];
        }
        return this.dp[i][j] = Math.max(matrix[i][j] + this.dfs(matrix, i+1, j, n),
        Math.max(matrix[i][j] + this.dfs(matrix, i+1, j-1, n), matrix[i][j] + this.dfs(matrix, i+1, j+1, n)));

    }
}


let n = 3 ;
let matrix = [[1, 2, 3],
            [9, 8, 7],
            [4, 5, 6]] ;
const obj = new MaxSum(n);
obj.start(matrix, n);
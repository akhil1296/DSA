function longestCommonSubsequence(x, y) {
    // Write your code here
    let m = x.length;
    let n = y.length;
    let dp = new Array(m + 1).fill(0).map(()=> new Array(n + 1).fill(0));
    
    for(let i = 1 ; i < m + 1 ; i++){
        for(let j = 1 ; j < n + 1 ; j++){
            if(x[i-1] === y[j -1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    let i = m ; 
    let j = n ;
    let res = [];
    while(i > 0 && j > 0){
        if(x[i - 1] === y[j -1]){
            res.push(x[i-1]);
            i--; j--;
        }
        else{
            if(dp[i][j-1] > dp[i-1][j]){
                j--;
            }
            else{
                i--;
            }
        }
    }
    return res.reverse();
}


let x = [1, 2, 3, 4, 1];
let y = [3, 4 ,1, 2, 1, 3]
longestCommonSubsequence(x, y);
/**
 * You are given N identical eggs and you have access to a K-floored building from 1 to K.

There exists a floor f where 0 <= f <= K such that any egg dropped at a floor higher than f will break, and any egg dropped at or below floor f will not break. There are few rules given below. 

An egg that survives a fall can be used again.
A broken egg must be discarded.
The effect of a fall is the same for all eggs.
If the egg doesn't break at a certain floor, it will not break at any floor below.
If the eggs breaks at a certain floor, it will break at any floor above.
Return the minimum number of moves that you need to determine with certainty what the value of f is.

For more description on this problem see wiki page

Example 1:

Input:
N = 1, K = 2
Output: 2
Explanation: 
1. Drop the egg from floor 1. If it 
   breaks, we know that f = 0.
2. Otherwise, drop the egg from floor 2.
   If it breaks, we know that f = 1.
3. If it does not break, then we know f = 2.
4. Hence, we need at minimum 2 moves to
   determine with certainty what the value of f is.
Example 2:

Input:
N = 2, K = 10
Output: 4
 */

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution 
{
    //Function to find minimum number of attempts needed in 
    //order to find the critical floor.
    eggDrop(e, f)
    { 
        // code here
    let dp = new Array(e + 1).fill(-1).map(()=> new Array(f + 1).fill(-1));
    return this.solve(e, f, dp);
    }
    solve(e, f, dp){
    if(f === 0 || f === 1){
        return f;
    }    
    if(e === 1){
        return f;
    }
    if(dp[e][f] !== -1){
        return dp[e][f];
    }
    let ans = Number.MAX_VALUE ;
    for(let k = 1 ; k < f + 1 ; k++){
        let low = 0, high = 0;
        // let temp = 1 + Math.max(solve(e-1, k - 1, dp), solve(e, f - k, dp));
        if(dp[e-1][k-1] !== -1){
            low = dp[e-1][k-1];
        }else{
            low = this.solve(e-1, k-1, dp);
            dp[e-1][k-1] = low;
        }
        if(dp[e][f-k] !== -1){
            high = dp[e][f-k];
        }else{
            high = this.solve(e, f-k, dp);
            dp[e][f-k] = high;
        }
        let temp = 1 + Math.max(low, high); 
        ans = Math.min(ans, temp);
    }
    dp[e][f] = ans;
    return dp[e][f];
}
}
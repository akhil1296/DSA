/**
 * Given a set of N items, each with a weight and a value, represented by the array w[] and val[] respectively. Also, a knapsack with weight limit W.
The task is to fill the knapsack in such a way that we can get the maximum profit. Return the maximum profit.
Note: Each item can be taken any number of times.

 

Example 1:

Input: N = 2, W = 3
val[] = {1, 1}
wt[] = {2, 1}
Output: 3
Explanation: 
1.Pick the 2nd element thrice.
2.Total profit = 1 + 1 + 1 = 3. Also the total 
  weight = 1 + 1 + 1  = 3 which is <= W.
 */

/**
 * @param {number} N
 * @param {number} W
 * @param {number[]} val
 * @param {number[]} wt
 * @return {number}
*/

class Solution {

    knapSack(n,W,val,wt){
        //code here
        let dp = new Array(n+1).fill(0).map(()=>new Array(W+1).fill(0));
        
        for(let i = 1 ; i < n + 1 ; i++){
            for(let j = 1; j < W + 1 ; j++){
                if(wt[i-1] <= j){
                    dp[i][j] = Math.max(val[i-1] + dp[i][j - wt[i-1]],  dp[i-1][j]);
                }
                else{
                    dp[i][j] = dp[i-1][j];
                }
            }
        }
        return dp[n][W];
    }
}
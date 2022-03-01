/**
 * Given two strings X and Y of lengths m and n respectively, find the length of the smallest string which has both, X and Y as its sub-sequences.
Note: X and Y can have both uppercase and lowercase letters.

Example 1

Input:
X = abcd, Y = xycd
Output: 6
Explanation: Shortest Common Supersequence
would be abxycd which is of length 6 and
has both the strings as its subsequences.
 */

/**
 * @param {string} X
 * @param {string} Y
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
 
 
 class Solution
 {
     //Function to find length of shortest common supersequence of two strings.
     shortestCommonSupersequence(X, Y, m, n)
     {
         // code here
         let LCS = this.solve(X, Y, m, n);
         return m + n - LCS;
     }
     solve(x, y, m, n){
         
         let dp = new Array(m + 1).fill(0).map(()=> new Array(n + 1).fill(0));
         
         for(let i = 1 ; i < m + 1 ; i++){
             for( let j =1 ; j < n + 1 ; j++){
                 if(x.charAt(i-1) === y.charAt(j -1)){
                     dp[i][j] = 1 + dp[i - 1][j - 1]; 
                 }
                 else{
                     dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
                 }
             }
         }
         
         return dp[m][n];
     }
     
 }
/**
 * Given two strings. The task is to find the length of the longest common substring.


Example 1:

Input: S1 = "ABCDGH", S2 = "ACDGHR"
Output: 4
Explanation: The longest common substring
is "CDGH" which has length 4.
 */
class Solution {
    longestCommonSubstr(x,y,n,m){
        //code here
        let dp = new Array(n + 1).fill(0).map(()=> new Array(m + 1).fill(0));
        
        let max = 0 ;
        for(let i = 1 ; i < n + 1 ; i++){
            for(let j = 1 ; j < m + 1 ; j++){
                if(x.charAt(i-1) === y.charAt(j-1)){
                    dp[i][j] = 1 + dp[i-1][j-1];
                    max = Math.max(max, dp[i][j]);
                }
                else{
                    dp[i][j] = 0;
                }
            }
        }
        return max;
    }
}
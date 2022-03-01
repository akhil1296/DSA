/**
 * Given a String, find the longest palindromic subsequence.


Example 1:

Input:
S = "bbabcbcab"
Output: 7
Explanation: Subsequence "babcbab" is the
longest subsequence which is also a palindrome.
Example 2:

Input: 
S = "abcd"
Output: 1
Explanation: "a", "b", "c" and "d" are
palindromic and all have a length 1.
 */

class Solution {
    longestPalinSubseq(S){
      //code here
      let lps = this.solve(S, this.reverse(S), S.length, S.length);
      return lps;
    }
    
    reverse(str){
        let rev = '';
        for(let i = str.length - 1 ; i >= 0 ; i--){
            rev = rev + str.charAt(i);
        }
        return rev;
    }
    
    solve(x, y, m, n){
        let dp = new Array(m + 1).fill(0).map(()=>new Array(n + 1).fill(0));
        
        for(let i = 1 ; i < m + 1 ; i++){
            for(let j = 1 ; j < n + 1 ; j++){
                if(x.charAt(i-1) === y.charAt(j-1)){
                    dp[i][j] = 1 + dp[i-1][j-1];
                }
                else{
                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                }
            }
        }
        return dp[m][n];
    }
  }
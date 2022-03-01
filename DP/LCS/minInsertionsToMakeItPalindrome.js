/**
 * Given a string, find the minimum number of characters to be inserted to convert it to palindrome.
For Example:
ab: Number of insertions required is 1. bab or aba
aa: Number of insertions required is 0. aa
abcd: Number of insertions required is 3. dcbabcd


Example 1:

Input: str = "abcd"
Output: 3
Explanation: Inserted character marked
with bold characters in dcbabcd
Example 2:

Input: str = "aa"
Output: 0
Explanation:"aa" is already a palindrome.
 */

class Solution{
    countMin(S){
        //code here
        let lps = this.solve(S, this.reverse(S), S.length, S.length);
        
        return S.length - lps; 
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

/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let lcs = solve(s, t);
    
    if(s.length === lcs){
        return true;
    }    
    return false;
};

function solve(x, y){
    let m = x.length;
    let n = y.length;
    
    let dp = new Array(m + 1).fill(0).map(()=>new Array(n + 1).fill(0));
    
    for(let i = 1 ; i < m + 1 ; i++){
        for(let j = 1 ; j < n + 1 ; j++){
            if(x.charAt(i-1) === y.charAt(j -1)){
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}


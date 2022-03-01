/**
 * 1092. Shortest Common Supersequence
Hard

1880

36

Add to List

Share
Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.

A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

 

Example 1:

Input: str1 = "abac", str2 = "cab"
Output: "cabac"
Explanation: 
str1 = "abac" is a subsequence of "cabac" because we can delete the first "c".
str2 = "cab" is a subsequence of "cabac" because we can delete the last "ac".
The answer provided is the shortest such string that satisfies these properties.
Example 2:

Input: str1 = "aaaaaaaa", str2 = "aaaaaaaa"
Output: "aaaaaaaa"

 */

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 var shortestCommonSupersequence = function(x, y) {
    // first find the scs
    let m = x.length;
    let n = y.length;
    
    let dp = new Array(m + 1).fill(0).map(()=> new Array(n + 1).fill(0));
    
    for(let i = 1 ; i < m + 1 ; i++){
        for(let j = 1 ; j < n + 1 ; j++){
            if(x.charAt(i-1) === y.charAt(j-1)){
                dp[i][j] = 1 + dp[i-1][j-1];
            }
            else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    
    let i = m ;
    let j = n ;
    
    let scs = '';
    while(i > 0 && j > 0){
        if(x.charAt(i-1) === y.charAt(j-1)){
            scs = scs + x.charAt(i-1);
            i--;
            j--;
        }
        else{
            if(dp[i][j-1] > dp[i-1][j]){
                scs = scs + y.charAt(j-1);
                j--;
            }
            else{
                scs = scs + x.charAt(i-1);
                i--;
            }
        }
    }
    while(i > 0){
        scs = scs + x.charAt(i-1);
        i--;
    }
    while(j > 0){
        scs = scs + y.charAt(j-1);
        j--;
    }
    
    return reverse(scs);
};
function reverse(str){
    let n = str.length;
    let rev = '';
    for(let i = n - 1 ; i >= 0 ; i--){
        rev = rev + str.charAt(i);
    }
    return rev;
}
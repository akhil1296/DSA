/**
 * Given two strings str1 and str2. The task is to remove or insert the minimum number of characters from/in str1 so as to transform it into str2. It could be possible that the same character needs to be removed/deleted from one point of str1 and inserted to some another point.

Example 1:

Input: str1 = "heap", str2 = "pea"
Output: 3
Explanation: 2 deletions and 1 insertion
p and h deleted from heap. Then, p is 
inserted at the beginning One thing to 
note, though p was required yet it was 
removed/deleted first from its position 
and then it is inserted to some other 
position. Thus, p contributes one to the 
deletion_count and one to the 
insertion_count.
Example 2:

Input : str1 = "geeksforgeeks"
str2 = "geeks"
Output: 8
Explanation: 8 deletions
 */


class Solution {
    minOperations(str1, str2) {
      //code here
      let m = str1.length;
      let n = str2.length;
      let lcs = this.solve(str1, str2, m, n);
      // no of insertions
      let deletions = m - lcs;
      let insertions = n - lcs ;
      
      return deletions + insertions;
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
  
/**
 * Given a string str, a partitioning of the string is a palindrome partitioning if every sub-string of the partition is a palindrome. Determine the fewest cuts needed for palindrome partitioning of given string.


Example 1:

Input: str = "ababbbabbababa"
Output: 3
Explaination: After 3 partitioning substrings 
are "a", "babbbab", "b", "ababa".
Example 2:

Input: str = "aaabba"
Output: 1
Explaination: The substrings after 1
partitioning are "aa" and "abba".
 */

class Solution {
    
    palindromicPartition(S)
    {
        //your code here
        let n = S.length;
        this.dp = new Array(n + 1).fill(-1).map(()=> new Array(n + 1).fill(-1));
        
        return this.solve(S, 0, n - 1);
        
    }
    solve(str, i , j){
        if(i >= j){
            return 0;
        }
        if(this.isPalindrome(str.substring(i, j + 1))){
            return 0;
        }
        if(this.dp[i][j] !== -1){
            return this.dp[i][j];
        }
        let ans = Number.MAX_VALUE;
        for(let k = i ; k < j ; k++){
            let temp = 1 + this.solve(str, i, k) + this.solve(str, k+1, j);
            ans = Math.min(ans, temp);
            
        }
        this.dp[i][j] = ans;
        return this.dp[i][j];
    }
    isPalindrome(str){
        let left = 0 ;
        let right = str.length - 1;
        
        while(left < right){
            if(str.charAt(left) !== str.charAt(right)){
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
}
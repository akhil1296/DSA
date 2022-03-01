/**
 * Given a sequence of matrices, find the most efficient way to multiply these matrices together. The efficient way is the one that involves the least number of multiplications.

The dimensions of the matrices are given in an array arr[] of size N (such that N = number of matrices + 1) where the ith matrix has the dimensions (arr[i-1] x arr[i]).

Example 1:

Input: N = 5
arr = {40, 20, 30, 10, 30}
Output: 26000
Explaination: There are 4 matrices of dimension 
40x20, 20x30, 30x10, 10x30. Say the matrices are 
named as A, B, C, D. Out of all possible combinations,
the most efficient way is (A*(B*C))*D. 
The number of operations are -
20*30*10 + 40*20*10 + 40*10*30 = 26000.
 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    
    matrixMultiplication(arr, n)
    {   
        //your code here
        this.dp = new Array(n + 1).fill(-1).map(()=>new Array(n + 1).fill(-1));
        return this.solve(arr, 1, n-1);
    }
    solve(arr, i, j){
        // base condition
        if(i >= j){
            return 0;
        }
        if(this.dp[i][j] !== -1){
            return this.dp[i][j];
        }
        let ans = Number.MAX_VALUE;
        for(let k = i ; k < j ; k++){
            let temp = this.solve(arr, i , k) + this.solve(arr, k + 1, j) + arr[i-1] * arr[j] * arr[k];
            ans = Math.min(temp, ans);
        }
        this.dp[i][j] = ans;
        return this.dp[i][j];
    }
}
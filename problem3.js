/**
 * Missing number in array 
Easy Accuracy: 42.51% Submissions: 100k+ Points: 2
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

Example 1:

Input:
N = 5
A[] = {1,2,3,5}
Output: 4
Example 2:

Input:
N = 10
A[] = {1,2,3,4,5,6,7,8,10}
Output: 9

Your Task :
You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input  parameters and returns the value of the missing number.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)


Constraints:
1 ≤ N ≤ 106
1 ≤ A[i] ≤ 106
 */

/**
 * @param {number[]} array
 * @param {number} n
 * @returns {number}
*/

class Solution{
    MissingNumber(array,n){
        //code here
        let t = 0;
        let sum = n*(n+1) / 2;
        array.forEach((element) => {
           t = t + element; 
        });
        return sum - t;
    }
}
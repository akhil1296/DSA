/**
 * Searching an element in a sorted array (Ternary Search) 
Medium Accuracy: 71.85% Submissions: 4710 Points: 4
Given a sorted array of size N and an integer K. Check if K is present in the array or not using ternary search.
Ternary Search - It is a divide and conquer algorithm that can be used to find an element in an array. It is similar to binary search where we divide the array into two parts but in this algorithm, we divide the given array into three parts and determine which has the key (searched element).
To know more please click this link.


Example 1:

Input:
N = 5, K = 6
arr[] = {1,2,3,4,6}
Output: 1
Exlpanation: Since, 6 is present in 
the array at index 4 (0-based indexing),
output is 1.
 

Example 2:

Input:
N = 5, K = 2
arr[] = {1,3,4,5,6}
Output: -1
Exlpanation: Since, 2 is not present 
in the array, output is -1.
 

Your Task:
You don't need to read input or print anything. Complete the function ternarySearch() which takes the sorted array arr[], its size N and the element K as input parameters and returns 1 if K is present in the array, else it returns -1. 


Expected Time Complexity: O(Log3N)
Expected Auxiliary Space: O(1)

 

Constraints:
1 <= N <= 106
1 <= K <= 106
1 <= arr[i] <= 106
 */

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @return {number}
 */

 class Solution {
    ternarySearch(arr,N,K){
      //code here
      return this.search(arr,0,N,K);
    }
    search(arr,left,right,K){
        if(left <= right){
            let mid1 = left + Math.floor((right-left)/3);
            let mid2 = right - Math.floor((right-left)/3);
            if( K === arr[mid1] || K ===arr[mid2]){
                    return 1;
            }
            else if( K < arr[mid1]){
                    return this.search(arr,left, mid1-1,K);
            }
            else if( K > arr[mid2]){
                    return this.search(arr,mid2+1, right,K);
            }
            else{
                 return this.search(arr,mid1+1,mid2-1,K);
            }
        }
        return -1;
    }
}


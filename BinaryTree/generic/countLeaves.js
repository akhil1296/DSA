/**
 * Count Leaves in Binary Tree 
Basic Accuracy: 63.56% Submissions: 61459 Points: 1
Given a Binary Tree of size N , You have to count leaves in it. For example, there are two leaves in following tree

        1
     /      \
   10      39
  /
5

 

Example 1:


Input:
Given Tree is 
               4
             /   \
            8     10
           /     /   \
          7     5     1
         /
        3 
Output:
3
Explanation: 
Three leaves are 3 , 5 and 1.
 

Your Task:
You don't have to take input. Complete the function countLeaves() that takes root node of given tree as parameter and returns the count of leaves in tree . The printing is done by the driver code.
 

Constraints:
1<= N <= 104

 

Note:The Input/Ouput format and Example given below is used for system's internal purpose, and should be used by a user for Expected Output only. As it is a function problem, hence a user should not read any input from stdin/console, and should not print anything on stdout/console. The task is to complete the function specified, and not to write the full code.
 */

class Solution {
    
    countLeaves(root){
        //code here
        if(root === null){
            return 0;
        }
        if(root.left === null && root.right === null){
            return 1;
        }
        else{
        return this.countLeaves(root.left) + this.countLeaves(root.right);
        }
    }
}
/**
 * Given a Binary Tree, find diameter of it.
The diameter of a tree is the number of nodes on the longest path between two end nodes in the tree. The diagram below shows two trees each with diameter nine, the leaves that form the ends of a longest path are shaded (note that there is more than one path in each tree of length nine, but no path longer than nine nodes).



Example 1:

Input:
       1
     /  \
    2    3
Output: 3
Example 2:

Input:
         10
        /   \
      20    30
    /   \ 
   40   60
Output: 4
Your Task:
You need to complete the function diameter() that takes root as parameter and returns the diameter.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the Tree).

Constraints:
1 <= Number of nodes <= 10000
1 <= Data of a node <= 1000
 */

class Solution {
    // Function to return the diameter of a Binary Tree.
    constructor(){
        this.count = 0;
    }
    diameter(root) {
        // your code here
        if(!root){
            return 0;
        }
        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);
        
        let lDiameter = this.diameter(root.left);
        let rDiameter = this.diameter(root.right);
        
        return Math.max(lHeight + rHeight +1, Math.max(lDiameter,rDiameter));
    }
    height(root){
        if(!root){
            return 0;
        }
        return (1 + Math.max(this.height(root.left),this.height(root.right)));
    }
}
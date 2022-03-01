/**
 * Construct Tree from Inorder & Preorder 
Medium Accuracy: 36.26% Submissions: 48011 Points: 4
Given 2 Arrays of Inorder and preorder traversal. Construct a tree and print the Postorder traversal. 

Example 1:

Input:
N = 4
inorder[] = {1 6 8 7}
preorder[] = {1 6 7 8}
Output: 8 7 6 1
Example 2:

Input:
N = 6
inorder[] = {3 1 4 0 5 2}
preorder[] = {0 1 3 4 2 5}
Output: 3 4 1 5 2 0
Explanation: The tree will look like
       0
    /     \
   1       2
 /   \    /
3    4   5
Your Task:
Your task is to complete the function buildTree() which takes 3 arguments(inorder traversal array, preorder traversal array, and size of tree n) and returns the root node to the tree constructed. You are not required to print anything and a new line is added automatically (The post order of the returned tree is printed by the driver's code.)

Expected Time Complexity: O(N*N).
Expected Auxiliary Space: O(N).

Constraints:
1<=Number of Nodes<=1000
 */

class Solution {
    constructor(){
        this.preIndex = 0;
    }
  	buildTree(inorder,preorder,n){
  		//code here
  		let root = this.build(inorder,preorder,0,n-1);
  		return root;
  	}
  	build(inorder, preorder, inStart, inEnd){
  	    if(inStart > inEnd){
  	        return null;
  	    }
  	    let node = new Node(preorder[this.preIndex++]);
  	    if(inStart === inEnd){
  	        return node;
  	    }
  	    let inIndex = this.search(inorder,inStart, inEnd,node.key);
  	    node.left = this.build(inorder, preorder, inStart, inIndex-1);
  	    node.right = this.build(inorder, preorder, inIndex+1, inEnd);
  	    return node;
  	}
  	search(inorder,inStart, inEnd, value){
  	    let i;
  	    for(let i = inStart ; i <= inEnd ; i++ ){
  	        if(value === inorder[i]){
  	            return i;
  	        }
  	    }
  	    return i;
  	}
}
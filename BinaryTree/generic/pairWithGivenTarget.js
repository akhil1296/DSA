/**
 * Given a Binary Search Tree and a target sum. Check whether there's a pair of Nodes in the BST with value summing up to the target sum. 

Example 1:

Input:
        2
      /   \
     1     3
sum = 5
Output: 1 
Explanation: 
Nodes with value 2 and 3 sum up to 5.
Example 2:

Input:
           6
          /    
         5     
        /
       3 
     /  \
    1    4
sum = 2
Output: 0 
Explanation: 
There's no pair that sums up to 2.
 

Your Task:
You don't need to read input or print anything. Your task is to complete the function isPairPresent() that takes a root node and a target value as a parameter and returns 1 if there's a pair of Nodes in the BST with values summing up to the target sum, else returns 0. 
 */

/**
 * @param {Node} root
 * @param {number} target
 * @return {number} 
*/
/**
 * @param {Node} root
 * @param {number} target
 * @return {number} 
*/
class Solution {
    isPairPresent(root,target){
        //code here
    while(true){
        let stack1 = [];
        let stack2 = [];
        let current1 = root;
        let current2 = root;
        let value1 = 0;
        let value2 = 0;
        let done1 = false;
        let done2 = false;
        while(done1 === false){
            if(current1 !== null ){
                stack1.push(current1);
                current1 = current1.left;
            }
            else{
                if(stack1.length === 0){
                    done1 = true;
                }
                else{
                    current1 = stack1.pop();
                    value1 = current1.data;
                    current1 = current1.right;
                    done1 = true;
                }
            }
        }
        
        while(done2 === false){
            if(current2 !== null ){
                stack2.push(current2);
                current2 = current2.right;
            }
            else{
                if(stack2.length === 0){
                    done2 = true;
                }
                else{
                    current2 = stack2.pop();
                    value2 = current2.data;
                    current2 = current2.right;
                    done2 = true;
                }
            }
            }
            
        if(value1 !== value2 && (value1 + value2) === target){
            return 1;
        }
        else if((value1 + value2) < target){
            done1 = false;
        }
        else if((value1 + value2) > target){
            done2 = false;
        }
        if(value1 >= value2){
            return 0;
        }
       }
    }
}
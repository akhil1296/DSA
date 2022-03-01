const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

/**
 *  1. Push root to first stack.
    2. Loop while first stack is not empty
       2.1 Pop a node from first stack and push it to second stack
       2.2 Push left and right children of the popped node to first stack
    3. Print contents of second stack
 */
class PostOrder {

    recursive(root){
        if(root){
            this.recursive(root.left);
            this.recursive(root.right);
            console.log(root.data);
        }
    }
    iterative(root){
        let stack1 = [];
        let stack2 = [];
        if(!root){
            return;
        }
         // Push root to first stack
        stack1.push(root);
         // Run while first stack is not empty
        while(stack1.length > 0){
            // Pop an item from s1 and Push it to s2
            let temp = stack1.pop();
            stack2.push(temp);
           // Push left and right children of
           // removed item to s1
            if(temp.left){
                stack1.push(temp.left);
            }
            if(temp.right){
                stack1.push(temp.right);
            }
        }

        while(stack2.length > 0){
            let pop = stack2.pop();
            console.log(pop.data);
        }
      
    }
}

const traversal = new PostOrder();
traversal.recursive(root);
console.log('---------');
traversal.iterative(root);
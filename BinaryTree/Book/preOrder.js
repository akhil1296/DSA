const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class PreOrder {

    recursive(root){
        if(root){
            console.log(root.data);
            this.recursive(root.left);
            this.recursive(root.right);
        }
    }
    iterative(root){
        let stack = [];
        while(true){
            while(root){
                console.log(root.data); // process the current node
                stack.push(root); // Go to left subtree, and keep on adding to stack
                root = root.left;
            }
            // If the stack is empty
            if(stack.length < 1){
                break;
            }
            root = stack.pop(); 
            // Completion of left subtree and current node, now go to the right subtree
            root = root.right;
        }
    }
}

const traversal = new PreOrder();
traversal.recursive(root);
console.log('---------');
traversal.iterative(root);
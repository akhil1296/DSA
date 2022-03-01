const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class Inorder {

    recursive(root){
        if(root){
            this.recursive(root.left);
            console.log(root.data);
            this.recursive(root.right);
        }
    }
    iterative(root){
        let stack = [];
        while(true){
            while(root){
                stack.push(root); // Go to left subtree, and keep on adding to stack
                root = root.left;
            }
            // If the stack is empty
            if(stack.length < 1){
                break;
            }
            root = stack.pop(); 
            console.log(root.data); // After popping, process the current node
            // Completion of left subtree and current node, now go to the right subtree
            root = root.right;
        }
    }
}

const traversal = new Inorder();
traversal.recursive(root);
console.log('---------');
traversal.iterative(root);
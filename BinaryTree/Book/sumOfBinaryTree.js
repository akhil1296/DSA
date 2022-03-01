const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

class SumOfTree {
    recursive(root){
        if(!root){
            return 0;
        }
        return root.data + this.recursive(root.left) + this.recursive(root.right);
    }
    iterative(root){
        let totalSum = 0;
        let queue = [];
        queue.push(root);
        while(queue.length > 0){
            let temp = queue.pop();
            totalSum = totalSum + temp.data;
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right);
            }
        }
        console.log(totalSum);
    }
     
}

const traversal = new SumOfTree();
let x = traversal.recursive(root);
console.log(x, ', ---------');
traversal.iterative(root);

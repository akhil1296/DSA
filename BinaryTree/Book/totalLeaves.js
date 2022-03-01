const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class TotalLeaves {
    constructor(){
        this.leaves = 0;
    }
    recursive(root){
        if(!root){
            return;
        }
        if(!root.left && !root.right){
            this.leaves ++;
        }
        this.recursive(root.left);
        this.recursive(root.right);
        return this.leaves;
    }

    iterative(root){
         let queue = [];
         queue.push(root);
         let count = 0;
         while(queue.length > 0){
             let temp = queue.shift();
             if(!temp.left && !temp.right){
                 count++;
             }
             if(temp.left){
                 queue.push(temp.left);
             }
             if(temp.right){
                 queue.push(temp.right);
             }
         }
         return count;
    }
}

const traversal = new TotalLeaves();
let count1 = traversal.recursive(root);
console.log("Total Leaves : ", count1);
console.log('---------');
let count2 = traversal.iterative(root);
console.log("Total Leaves : ", count2);
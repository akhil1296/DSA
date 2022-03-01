const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class MaximumElement {
    constructor(){
        this.max = Number.MIN_VALUE;
    }
    recursive(root){
        if(!root){
            return null;
        }

        if(root.data > this.max){
            this.max = root.data;
        }
        this.recursive(root.left);
        this.recursive(root.right);
        return this.max;
    }

    iterative(root){
        let max =  Number.MIN_VALUE;
        let queue = [];
        queue.push(root);
        while(queue.length > 0){
            let temp = queue.shift(root);
            if(temp.data > max){
                max = temp.data;
            }
            if(temp.left !== null){
                queue.push(temp.left);
            }
            if(temp.right !== null){
                queue.push(temp.right);
            }
        }
        return max;
    }
}

const traversal = new MaximumElement();
let max1 = traversal.recursive(root);
console.log(max1);
console.log('---------');
let max2 = traversal.iterative(root);
console.log(max2);
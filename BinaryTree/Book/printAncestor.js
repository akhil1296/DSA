const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

class Node {
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
}
class PrintAncestors {
    
    recursive(root, node){
        if(!root){
            return false;
        }
        if(root.data === node){
            return true;
        }
        if(this.recursive(root.left, node) || this.recursive(root.right, node)){
            console.log(root.data);
            return true;
        }
        return false;
    }
}

const traversal = new PrintAncestors();
let count1 = traversal.recursive(root, 20);
console.log("Print Ancestor : ", count1);
console.log('---------');

const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20

class MirrorTree {
    recursive(root){
        if(root){
           this.recursive(root.left);
           this.recursive(root.right);
           let temp = root.left;
           root.left = root.right;
           root.right = temp;
        }
        return root;
    }     
    showTree(root){
         console.log(root);
    }

}

const mainFunction = () => {
    const traversal = new MirrorTree();
    let x = traversal.recursive(root);
    traversal.showTree(x);
    return x;
};

module.exports = {
    mainFunction,
}
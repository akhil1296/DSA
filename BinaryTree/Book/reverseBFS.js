const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class ReverseLevelOrderTraversal {

    traverse(root){
        let height = this.getHeight(root);
        for( let i = height ; i >= 1 ; i -- ){
            this.levelOrderTraversal(root, i);
        }
    }

    getHeight(root){
        if(!root){
            return 0;
        }
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }

    levelOrderTraversal(root, level){
        if(level < 1){
            return;
        }
        if(level === 1){
            console.log(root.data);
        }
        else{
            this.levelOrderTraversal(root.left, level-1);
            this.levelOrderTraversal(root.right, level-1);
        }
    }
}

const traversal = new ReverseLevelOrderTraversal();
traversal.traverse(root);
console.log('---------');

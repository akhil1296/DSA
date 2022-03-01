const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class BFS {
    getHeight(root){
        if(!root){
            return 0;
        }
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }
    recursive(root){
        let height = this.getHeight(root);
        for(let i = 1 ; i <= height ; i++){
            this.bfsRecursive(root, i);
        }
    }

    bfsRecursive(root, level){
        if(level < 1){
            return;
        }
        if(level === 1){
            console.log(root.data);
        }
        else{
            this.bfsRecursive(root.left, level - 1);
            this.bfsRecursive(root.right, level - 1);
        }
    }

    iterative(root){
        let queue = [];
        queue.push(root);
        while(queue.length > 0){
            let temp = queue.shift(root);
            console.log(temp.data);
            if(temp.left !== null){
                queue.push(temp.left);
            }
            if(temp.right !== null){
                queue.push(temp.right);
            }
        }
    }
}

const traversal = new BFS();
traversal.recursive(root);
console.log('---------');
traversal.iterative(root);
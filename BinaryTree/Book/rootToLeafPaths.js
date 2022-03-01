const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class RootToLeafPath {

    recursive(root, path, len){
        if(!root){
            return;
        }
        // path.push(root.data);
        path[len] = root.data;
        len++;
        if(!root.left && !root.right){
            console.log('path : ', path);
        }
        else{
            this.recursive(root.left, path, len);
            this.recursive(root.right, path, len);
        }
    }
}

const traversal = new RootToLeafPath();
traversal.recursive(root, [], 0);
console.log('---------');

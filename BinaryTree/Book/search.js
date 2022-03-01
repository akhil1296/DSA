const tree = require('./basicBinaryTree');
const root = tree.mainFunction();
               //       15
              //    10       18
             // 8     12  16    20
class SearchElement {
    
    recursive(root, element){
        if(!root){
            return false;
        }
        if(root.data === element){
            return true;
        }
        else if(element < root.data){
          return this.recursive(root.left, element);
        }
        else{
          return this.recursive(root.right, element);
        }
    }

    iterative(root, element){
        let queue = [];
        queue.push(root);
        while(queue.length > 0){
            let temp = queue.shift();
            if(temp.data === element){
                return true;
            }
            else if(element < temp.data && temp.left !== null){
                queue.push(temp.left);
            }
            else if(element > temp.data && temp.right !== null){
                queue.push(temp.right);
            }
        }
        return false;
    }
}

const traversal = new SearchElement();
let found1 = traversal.recursive(root, 16);
console.log(found1);
console.log('---------');
let found2 = traversal.iterative(root, 15);
console.log(found2);
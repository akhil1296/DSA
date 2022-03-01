               //       15
              //    10       18
             // 8     12  16    20
class Node
{
    constructor(item)
    {
        this.data = item;
        this.left = this.right = null;
    }
}
class TreeFromInorderAndPreorder {
    constructor(){
        this.preIndex = 0;
    }
    constructTree(inOrder, preOrder, inStart, inEnd){
        if(inStart > inEnd){
            return null;
        }
        // Pick current node from Preorder
        // traversal using preIndex and
        // increment preIndex
        let node = new Node(preOrder[this.preIndex++]);
        // If this node has no children then return
        if(inStart === inEnd){
            return node;
        }
        // Else find the index of this
        // node in Inorder traversal
        let inIndex = this.search(inOrder, inStart, inEnd, node.data);
        // Using index in Inorder traversal,
        // construct left and right subtress
        node.left = this.constructTree(inOrder, preOrder , inStart, inIndex-1);
        node.right = this.constructTree(inOrder, preOrder, inIndex+1, inEnd);
        return node;
    }
    search(inOrder, start, end, value){
        let i = start ;
        for(i = start ; i <= end ; i++){
            if(inOrder[i] === value){
                return i;
            }
        }
        return i;
    }
}

const traversal = new TreeFromInorderAndPreorder();
let inOrder = [8, 10, 12, 15, 16, 18 ,20];
let preOrder = [15, 10, 8, 12, 18, 16 ,20];
let root = traversal.constructTree(inOrder, preOrder, 0, inOrder.length - 1);
console.log(root);

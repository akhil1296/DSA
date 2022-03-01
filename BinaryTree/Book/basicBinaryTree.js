class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    getRoot(){
        return this.root;
    }
    insert(root, element){
        if(!root){
            root = new Node(element);
        }
        if(element < root.data){
                root.left = this.insert(root.left, element);
            }
        else if(element > root.data){
                root.right = this.insert(root.right, element);
            }
        this.root = root;
        return root;
    }
    showTree(){
        console.log(this.root);
              //       15
             //    10       18
             // 8     12  16    20
    }
}
 
const mainFunction = () => {
    const tree = new BinaryTree();
    let root = tree.getRoot();
    let array =  [15, 10, 18, 8, 12, 16, 20];
    array.forEach((element) => {
        root = tree.insert(root, element);
    });
    // tree.showTree();
    return root;
};

module.exports = {
    mainFunction,
}
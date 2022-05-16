class Node{
    constructor(){
        this.value = 0;
        this.left = null;
        this.right = null;
    }
};
 
function newNode(value){
    const temp = new Node();
    temp.value = value;
    temp.left = null;
    temp.right = null;
    return temp;
}
  
// create tree
const root = newNode(5);
root.left = newNode(3);
root.right = newNode(7);
root.left.left = newNode(2);
root.left.right = newNode(5);
root.right.left = newNode(1);
root.right.right = newNode(0);
root.right.right.left = newNode(2);
root.right.right.right = newNode(8);
root.right.right.right.right = newNode(5);


let leafs = [];

function findLeaf(root){
    
    if (root == null){
        return(console.log('elo'));        
    }            
    if (root.left == null && root.right == null){               
        return (leafs.push(root.value));
    }   
    if (root.left != null){
        findLeaf(root.left);
    }     
    if (root.right != null){
        findLeaf(root.right);
    }  
}

findLeaf(root);

console.log('Last nodes of tree: ' + leafs);

module.exports = newNode, findLeaf;

class Node{
    constructor(){
        this.value = 0;
        this.left = null;
        this.right = null;
    }
};
 
function newNode(value){
    let temp = new Node();
    temp.value = value;
    temp.left = null;
    temp.right = null;
    return temp;
}
 
// create tree
let root = newNode(5);
root.left = newNode(3);
root.right = newNode(7);
root.left.left = newNode(2);
root.left.right = newNode(5);
root.right.left = newNode(1);
root.right.right = newNode(0);
root.right.right.left = newNode(2);
root.right.right.right = newNode(8);
root.right.right.right.right = newNode(5);

 
function findFurthestLeaf(root){
    if (root == null){
        let path = [];
        return path;
    }            

    let right = findFurthestLeaf(root.right);

    let left = findFurthestLeaf(root.left);

    if (right.length < left.length){
        left.push(root.value);
    }else{
        right.push(root.value);
    }
    
    if(left.length > right.length){
        return left;
    }else{
        return right;
    }
}

let path = findFurthestLeaf(root);

path = path.reverse();

console.log('Path from root to furthest node: ' + path);

module.exports = findFurthestLeaf;
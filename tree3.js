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
 
// create 1 tree
let root1 = newNode(5);
root1.left = newNode(3);
root1.right = newNode(7);
root1.left.left = newNode(2);
root1.left.right = newNode(5);
root1.right.left = newNode(1);
root1.right.right = newNode(0);
root1.right.right.left = newNode(2);
root1.right.right.right = newNode(8);
root1.right.right.right.right = newNode(5);

// create 2 tree
let root2 = newNode(5);
root2.left = newNode(3);
root2.right = newNode(7);
root2.left.left = newNode(2);
root2.left.right = newNode(5);
root2.right.left = newNode(1);
root2.right.right = newNode(0);
root2.right.right.left = newNode(2);
root2.right.right.right = newNode(8);
root2.right.right.right.right = newNode(5);

function compareTrees(root1, root2){
    if (root1 == null && root2 == null){
        return true;
    }
         
    if (root1 != null && root2 != null){
        if(root1.value === root2.value){
            return compareTrees(root1.left, root2.left) && compareTrees(root1.right, root2.right);      
        }
    }
     
    return false;
}

if (compareTrees(root1, root2)){
    console.log("trees are equivalent");
}else{
    console.log("trees are different");
}

module.exports = newNode, compareTrees;
    
                  


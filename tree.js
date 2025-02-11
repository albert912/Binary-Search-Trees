class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
constructor() {
    this.root = null;
}


// Method for removing duplicates

removeDuplicates(arr) {
    return [...new Set(arr)];
}



// Function for sorting the array


sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }

  

  // Function for inserting a node

  insert(root, data) {

    if (root === null)
        return new Node(data);
        
    
    if (root.data === data)
        return data;
        
    if (data < root.data)
        root.left = this.insert(root.left, data);
    else if (data > root.data)
        root.right = this.insert(root.right, data);

    return root;
}


   // Function for deleting a node

   getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) {
        curr = curr.left;
    }
    return curr;
}

delNode(root, x) {
   
    if (root === null) {
        return root;
    }

  
    if (root.data > x) {
        root.left = this.delNode(root.left, x);
    } else if (root.data < x) {
        root.right = this.delNode(root.right, x);
    } else {
        

        
        if (root.left === null) 
            return root.right;

        
        if (root.right === null) 
            return root.left;

        
        let succ = getSuccessor(root);
        root.key = succ.key;
        root.right = delNode(root.right, succ.key);
    }
    return root;
}

// Function for finding value

search(root, data)
{

   
    if (root === null || root.data === data)
        return root;

   
    if (root.data < data)
        return this.search(root.right,data);

  
    return this.search(root.left, data);
}





 buildTree(array, start , end){



if (start > end) return null;



let mid = start + Math.floor((end - start) / 2 );

let root = new Node(array[mid]);

// Create left subtree
root.left = this.buildTree(array, start, mid - 1);

// Create right subtree
root.right = this.buildTree(array, mid + 1, end);

return root;


}



// Function for finding height


findHeightUtil(root, x)
{
    
    // Base Case
    if (root == null)
    {
        return -1;
    }

   
    let leftHeight = this.findHeightUtil(root.left, x);

    let rightHeight = this.findHeightUtil(root.right, x);

   
    let ans = Math.max(leftHeight, rightHeight) + 1;

  
    if (root.data == x)
        this.height = ans;

    return ans;
}





findHeight(root, x)
{
    
   
    this.findHeightUtil(root, x);

    return this.height;
}

// Function for finding depth

findDepth(root, x)
{
    
   
    if (root == null)
        return -1;

 
    let dist = -1;

  
    if ((root.data == x)|| 
    
      
        (dist = this.findDepth(root.left, x)) >= 0 || 
        
      
        (dist = this.findDepth(root.right, x)) >= 0)

     
        return dist + 1;
        
    return dist;
}

// Write isBalanced function 

hight(root) {

 
    if (root === null)
        return 0;

   
    return 1 + Math.max(this.hight(root.left), this.hight(root.right));
}

isBalanced(root) {

   
    if (root === null)
        return true;

 
    let lHeight = this.hight(root.left);
    let rHeight = this.hight(root.right);

   
    if (Math.abs(lHeight - rHeight) > 1)
        return false;

  
    return this.isBalanced(root.left) && this.isBalanced(root.right);
}

// Write function for rebalance

//part 1

storeInorder(root, array) {
    if (root === null)
        return;

    
    this.storeInorder(root.left, array);

  
    array.push(root.data);

   
    this.storeInorder(root.right, array);
}

// part 2 

balanceBST(root) {
    let array = [];

    
    this.storeInorder(root, array);

   
    return this.buildTree(array, 0, array.length - 1);
}



preOrder(root) {
    if (root === null) return ;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);

}

postOrder(root) {

    if (root === null) return ;

    this.postOrder(root.left);

    this.postOrder(root.right);

    console.log(root.data + " ");
}

inOrder(root) {
    if (root !== null) {
        this.inOrder(root.left);
        console.log(root.data + " ");
        this.inOrder(root.right);
    }
}

// Function for lever order traversal

levelOrderRec(root, level, res) {
    if (!root) return;


   

   
    if (res.length <= level) 
        res.push([]);

   
    res[level].push(root.data);

   
    this.levelOrderRec(root.left, level + 1, res);
   this.levelOrderRec(root.right, level + 1, res);
}

 levelOrder(root) {
    const res = [];
    this.levelOrderRec(root, 0, res);
    return res;
}


prettyPrint(node, prefix, isLeft) {
    if (node === null) {
      return;
    }
  
    prefix = prefix || ""; // 
    isLeft = isLeft === undefined ? true : isLeft; 
  
    if (node.right !== null) {
      this.prettyPrint(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }
  
    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.data);
  
    if (node.left !== null) {
      this.prettyPrint(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }




}

// CALL PHASE

/*const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];


const practice = new Tree();

const dfree = practice.removeDuplicates(arr);

const sdfree = practice.sortArray(dfree);


console.log(sdfree);


// USE THIS AT THE END
let root = practice.buildTree(sdfree, 0, 10);

practice.preOrder(root);

root = practice.insert(root, 6000);

root = practice.insert(root, 2);

practice.prettyPrint(root);

root = practice.delNode(root, 1);

root = practice.delNode(root, 2);


practice.inOrder(root);


practice.prettyPrint(root);

console.log(practice.search(root, 8));


let res = practice.levelOrder(root);


res = res.map(level => level.join(" "));
console.log(res.join(" "));

practice.postOrder(root);

console.log("Depth: " + practice.findDepth(root, 5));

console.log("Height: " + practice.findHeight(root, 5));

if (practice.isBalanced(root)) {
    console.log("True");
} else {
    console.log("False");
}


let balancedRoot = practice.balanceBST(root);

practice.prettyPrint(root);

practice.prettyPrint(balancedRoot);

let res1 = practice.levelOrder(balancedRoot);


res2 = res1.map(level => level.join(" "));
console.log(res2.join(" "));


if (practice.isBalanced(balancedRoot)) {
    console.log("True");
} else {
    console.log("False");
}*/

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 92];

const practice = new Tree();

const dfree = practice.removeDuplicates(arr);

const sdfree = practice.sortArray(dfree);


console.log(sdfree);


// USE THIS AT THE END
let root = practice.buildTree(sdfree, 0, 9);



if (practice.isBalanced(root)) {
    console.log("True");
} else {
    console.log("False");
}

practice.prettyPrint(root);

practice.preOrder(root);

let res = practice.levelOrder(root);


res = res.map(level => level.join(" "));
console.log(res.join(" "));

practice.postOrder(root);

practice.inOrder(root);


root = practice.insert(root, 125);

root = practice.insert(root, 150);

practice.prettyPrint(root);


if (practice.isBalanced(root)) {
    console.log("True");
} else {
    console.log("False");
}


let balancedRoot = practice.balanceBST(root);

practice.prettyPrint(balancedRoot);

if (practice.isBalanced(balancedRoot)) {
    console.log("True");
} else {
    console.log("False");
}


let res1 = practice.levelOrder(balancedRoot);


res2 = res1.map(level => level.join(" "));
console.log(res2.join(" "))

practice.preOrder(balancedRoot);

practice.postOrder(balancedRoot);

practice.inOrder(balancedRoot);


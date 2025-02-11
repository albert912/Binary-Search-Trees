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

    // Base Cases: root is null or key is 
    // present at root
    if (root === null || root.data === data)
        return root;

    // Key is greater than root's key
    if (root.data < data)
        return this.search(root.right,data);

    // Key is smaller than root's key
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

    // Store the maximum height of
    // the left and right subtree
    var leftHeight = this.findHeightUtil(root.left, x);

    var rightHeight = this.findHeightUtil(root.right, x);

    // Update height of the current node
    var ans = Math.max(leftHeight, rightHeight) + 1;

    // If current node is the required node
    if (root.data == x)
        this.height = ans;

    return ans;
}





findHeight(root, x)
{
    
    // Stores height of the Tree
    this.findHeightUtil(root, x);

    // Return the height
    return this.height;
}

// Function for finding depth

findDepth(root, x)
{
    
    // Base case
    if (root == null)
        return -1;

    // Initialize distance as -1
    var dist = -1;

    // Check if x is current node=
    if ((root.data == x)|| 
    
        // Otherwise, check if x is
        // present in the left subtree
        (dist = this.findDepth(root.left, x)) >= 0 || 
        
        // Otherwise, check if x is
        // present in the right subtree
        (dist = this.findDepth(root.right, x)) >= 0)

        // Return depth of the node
        return dist + 1;
        
    return dist;
}

// THIS MAY NOT WORK

Balance(array) {
    return buildTree(array, 0, array.length - 1);
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
  
    prefix = prefix || ""; // Default prefix if not provided
    isLeft = isLeft === undefined ? true : isLeft; // Default isLeft if not provided
  
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

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];


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
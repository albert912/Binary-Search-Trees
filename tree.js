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

// THIS MAY NOT WORK

Balance(array) {
    return buildTree(array, 0, array.length - 1);
}

preOrder(root) {
    if (root === null) return;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);

}

inOrder(root) {
    if (root !== null) {
        this.inOrder(root.left);
        console.log(root.data + " ");
        this.inOrder(root.right);
    }
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



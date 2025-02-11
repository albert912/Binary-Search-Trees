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
const root = practice.buildTree(sdfree, 0, 10);

practice.preOrder(root);

practice.prettyPrint(root);



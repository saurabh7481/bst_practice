class Node{
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(val){
    const node = new Node(val);
    if(this.root === null){
      this.root = node;
      return this;
    }

    let curr = this.root;
    while(curr){
      if(val === curr.value) return null;
      if(val > curr.value){
        if(!curr.right){
          curr.right = node;
          return this;
        } else {
          curr = curr.right;
        }
      } else {
        if(!curr.left){
          curr.left = node;
          return this;
        } else {
          curr = curr.left;
        }
      }
    }
  }

  search(val){
    if(!this.root) return null;

    let curr = this.root;
    let found = false;
    while(curr && !found){
      if(val < curr.value){
        curr = curr.left;
      } else if(val > curr.value){
        curr = curr.right;
      } else {
        found = curr;
      }
    }

    if(!found) return null;
    return found;
  }


}

const bst = new BinarySearchTree();
bst.insert(25);
bst.insert(15);
bst.insert(50);
bst.insert(10);
bst.insert(22);
bst.insert(35);
bst.insert(70);
bst.insert(4);
bst.insert(12);
bst.insert(18);
bst.insert(24);
bst.insert(31);
bst.insert(44);
bst.insert(66);
bst.insert(90);



const preOrderRecursive = (node) => {
  if(!node) return;

  console.log(node.value);
  preOrderRecursive(node.left);
  preOrderRecursive(node.right);
}

const preOrderIterative = (node) => {
  if(!node) return null;

  const stack = [];
  stack.push(node);

  while(stack.length){
    const curr = stack.pop();
    console.log(curr.value);

    if(curr.right) stack.push(curr.right);
    if(curr.left) stack.push(curr.left);
  }
}

preOrderRecursive(bst.root);
preOrderIterative(bst.root);

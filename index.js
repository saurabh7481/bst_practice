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

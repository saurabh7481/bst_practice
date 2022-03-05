 const findMinBST = (node) => {
  if(node === null){
    return null;
  } else if(node.left == null){
    return node.data;
  }

  return findMinBST(node.left);
}

const findMaxBST = (node) => {
  if(node === null){
    return null;
  } else if(node.right == null){
    return node.data;
  }

  return findMaxBST(node.right);
}

const recursion = (tree) => {
  const arr = [];
  let height = 0;

  const searchTree = (node) => {
    if (node.left) {
      height += 1;
      searchTree(node.left);
      height -= 1;
    }
    if (node.right) {
      height += 1;
      searchTree(node.right);
      height -= 1;
    }
    if (!arr[height]) {
      arr[height] = [];
    }
    arr[height].push(node.value);
  };

  searchTree(tree);

  return arr;
};

module.exports = recursion;

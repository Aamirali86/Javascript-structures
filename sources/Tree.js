/* binary search tree */ 

export function Tree() {
  this.root = null;

  var Node = function(value) {
    this.left = null;
    this.right = null;
    this.data = value;
  }

  this.add = function(data) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if(data < node.data) {
          if(node.left === null) {
            node.left = new Node(data);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left)
          }
        } else if(data > node.data) {
          if(node.right === null) {
            node.right = new Node(data);
            return;
          } else if(node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }

  }

  this.remove = function() {
    const removeNode = function(node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children 
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child 
        if (node.left == null) {
          return node.right;
        }
        // node has no right child 
        if (node.right == null) {
          return node.left;
        }
        // node has two children 
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  this.isPresent = function() {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  this.isBalanced = function() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1)
  }

  findMinHeight(node = this.root) {
    if (node == null) {
        return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
        return left + 1;
    } else {
        return right + 1;
    };
  }
  
  findMaxHeight(node = this.root) {
    if (node == null) {
        return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  this.inOrder = function() {
    let node = this.root;
    
    if(node === null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    }
  }

  this.preOrder = function() {
    let node = this.root;
    
    if(node === null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        node.left && traversePreOrder(node.left);
        result.push(node.data);
        node.right && traversePreOrder(node.right);
      };
      traversePreOrder(this.root);
      return result;
    }
  }

  this.postOrder = function() {
    let node = this.root;
    
    if(node === null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
        result.push(node.data);
      };
      traversePreOrder(this.root);
      return result;
    }
  }

}

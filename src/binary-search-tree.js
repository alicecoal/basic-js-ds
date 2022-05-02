const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node
{
    constructor(value)
    {
      this.left = null;
      this.right = null;
      this.data = value;
    }
}

class BinarySearchTree {
  constructor()
  {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(value)
  {
      var x = new Node(value);
      if (this._root !== null)
        this.addNode(this._root, x);
      else
        this._root = x;
  }
 
  addNode(cur_node, x)
  {
      if(x.data < cur_node.data)
      {
          if(cur_node.left !== null)
            this.addNode(cur_node.left, x);
          else
            cur_node.left = x;   
      }
      else
      {
          if(cur_node.right !== null)
            this.addNode(cur_node.right,x);
          else
            cur_node.right = x;
      }
  }

  has(value) {
    if (this.find(value)!=null) return true;
    else return false;
  }

  find(value) {
    return this.findNode(this._root,value);
  }

  findNode(cur_node, value)
  {
    if(cur_node === null)
      return null;
    else if(value < cur_node.data)
      return this.findNode(cur_node.left, value);
    else if(value > cur_node.data)
      return this.findNode(cur_node.right, value);
    else
      return cur_node;
  }

  remove(value)
  {
      this.root = this.removeNode(this._root, value);
  }
  
  removeNode(cur_node, value)
  {
      if (cur_node === null)
          return null;
      else if (value < cur_node.data)
      {
        cur_node.left = this.removeNode(cur_node.left, value);
          return cur_node;
      }
      else if (value > cur_node.data)
      {
        cur_node.right = this.removeNode(cur_node.right, value);
          return cur_node;
      }
      else
      {
          if (cur_node.left === null && cur_node.right === null)
          {
            cur_node = null;
              return cur_node;
          }

          if (cur_node.left === null)
          {
            cur_node = cur_node.right;
              return cur_node;
          }
          else if (cur_node.right === null)
          {
            cur_node = cur_node.left;
              return cur_node;
          }

          let n = this.minNode(cur_node.right);
          cur_node.data = n.data;
          cur_node.right = this.removeNode(cur_node.right, n.data);
          return cur_node;
      }
  
  }

  min(){
    let node = this.minNode(this._root)
    return node.data;
  }

  minNode(cur_node) {
    if(cur_node.left === null)
        return cur_node;
    else
        return this.minNode(cur_node.left);
  }

  max() {
    let node = this.maxNode(this._root)
    return node.data;
  }

  maxNode(cur_node) {
    if(cur_node.right === null)
        return cur_node;
    else
        return this.maxNode(cur_node.right);
  }
}

module.exports = {
  BinarySearchTree
};
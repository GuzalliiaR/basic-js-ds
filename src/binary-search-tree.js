// const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    const addRecurs = (currentNode) => {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode
        } else {
          addRecurs(currentNode.left)
        }
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode
        } else {
          addRecurs(currentNode.right)
        }
      } else {
        return;
      }
    };

    if (this.rootNode === null) {
      this.rootNode = newNode;   // this.rootNode.left = null и this.rootNode.right = null;
      return;
    } else {
      addRecurs(this.rootNode);
    }
  }

  find(data) {
    const findRecurs = (currentNode) => {
      if (currentNode === null) return null;

      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        return findRecurs(currentNode.left);
      } else if (data > currentNode.data) {
        return findRecurs(currentNode.right);
      }
    };

    const findNode = findRecurs(this.rootNode);
    return findNode;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    // removeRecurs(node, data) возвращает корень того поддерева, которое получилось
    // после удаления data из поддерева с корнем node
    const removeRecurs = (currentNode, data) => {
      if (currentNode === null) return null;

      if (data < currentNode.data) {
        currentNode.left = removeRecurs(currentNode.left, data);
        return currentNode;
      }

      if (data > currentNode.data) {
        currentNode.right = removeRecurs(currentNode.right, data);
        return currentNode;
      }

      if (data === currentNode.data) {
        // 1. Узел - это лист (нет детей)
        if (currentNode.left === null && currentNode.right === null) {
          return null;
        }

        // 2. Один ребенок только есть
        if (currentNode.left === null || currentNode.right === null) {
          const oneChild = currentNode.left !== null ? currentNode.left : currentNode.right;
          return oneChild;
        }

        // 3. оба ребенка есть (надо найти минимум в правом поддереве)
        if (currentNode.left !== null && currentNode.right !== null) {
          // ищем минимальное data в правом поддереве удаляемого узла
          let minRight = currentNode.right;
          while (minRight.left !== null) {
            minRight = minRight.left;
          }

          // замена значения data в удаляемом узле
          currentNode.data = minRight.data;

          // удаление рекурсией узла, в котором ранее содержалось значение minRight.left
          currentNode.right = removeRecurs(currentNode.right, minRight.data);

          // возврат измененного узла currentNode
          return currentNode;
        }
      }
    }

    // removeRecurs возвращает новый корень поддерева
    this.rootNode = removeRecurs(this.rootNode, data);
  }

  min() {
    if (this.rootNode === null) return null;

    let node = this.rootNode;
    while (node.left !== null) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (this.rootNode === null) return null;

    let node = this.rootNode;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

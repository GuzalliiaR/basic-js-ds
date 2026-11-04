const { NotImplementedError } = require('../lib');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let prev = null;
  let current = l;  // бегунок по списку
  while (current !== null) {
    if (current.value === k) {
      if (current === l) {
        l = l.next;        // сдвиг l до следующего, если первый элемент l === k
      } else {
        prev.next = current.next;  // перескочили через current
      }
    } else {
      prev = current;
    }
    current = current.next;
  }

  return l;
}

module.exports = {
  removeKFromList
};

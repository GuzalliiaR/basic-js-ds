const { NotImplementedError } = require('../lib');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stackArr = [];
  }

  // добавляет элемент в стек
  push(value) {
    this.stackArr.push(value);
    return this;
  }

  // возвращает верхний элемент из стека и удаляет его
  pop() {
    const lastElementRemove = this.stackArr.pop();
    return lastElementRemove;
  }

  // возвращает просмотр, но не удаляет его
  peek() {
    const lastElement = this.stackArr.slice(-1)[0];
    return lastElement;
  }
}

module.exports = {
  Stack,
};

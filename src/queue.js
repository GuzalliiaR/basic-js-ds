// const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;  // голова односвязного списка
    this.tail = null;  // хвост односвязного списка
  }

  // возвращает базовый связанный список, например { value: 3, next: null }
  getUnderlyingList() {
    // Рекурсивный перебор для приведения объекта с прототипом ListNode к простому объекту
    const toPlain = (node) =>
      node === null ? null : { value: node.value, next: toPlain(node.next) };

    return toPlain(this.head);
  }

  // добавляет элемент в конец очереди
  enqueue(value) {
    const current = new ListNode(value);

    if (this.head === null && this.tail === null) {
      this.head = current;
    } else {
      this.tail.next = current;  // связываем старый хвост с новым узлом
    }

    this.tail = current;       // записываем в новый хвост новый узел
  }

  // извлекает значение из начала очереди и удаляет его
  dequeue() {
    if (this.head === null) return undefined;

    const firstElement = this.head.value;

    // в голову записываем второй элемент списка и далее проверяем этот второй элемент
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }

    return firstElement;
  }
}

module.exports = {
  Queue
};

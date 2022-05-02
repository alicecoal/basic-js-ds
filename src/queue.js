const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
 class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  getUnderlyingList() {
    return this.list[0];
  }

  enqueue(value) {
    let x = new ListNode(value);
    if (this.length!=0) this.list[this.length-1].next=x;
    this.list.push(x);
    this.length++;
  }

  dequeue() {
    this.length--;
    return this.list.shift().value;
  }
}

module.exports = {
  Queue
};

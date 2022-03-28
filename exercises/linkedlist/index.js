// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node('Hi');
// n1.data; // Hi
// n1.next; //null

// const n2 = new Node('There!', n1);
// n2.next; // n1

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter
  }

  getFirst() {
    return this.head;
  }

  getlast() {
    if (!this.head) {
      return null;
    }
    let node = this.head
    while (node) {
      if (!node.next) {
        return node; // last node
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    const lastNode = this.getlast();
    if (lastNode) {
      // chain exists
      lastNode.next = node;
    } else {
      // the chain is empty
      this.head = node;
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;

    node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next();
    }
    return null;
  }

  removetAt(index) {
    if (!this.head) {
      return null;
    }

    if (this.size() < index) {
      return null;
    }

    if (index == 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    previous.next = previous.next.next;

  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);;
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1);
    previous.next = new Node(data, previous.next);
  }
}

module.exports = { Node, LinkedList };

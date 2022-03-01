/* eslint-disable no-plusplus */
// eslint-disable-next-line max-classes-per-file
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return this;
  }

  insertAtEnd(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    let oldTail = current;
    while (current) {
      oldTail = current;
      current = current.next;
    }
    newNode.prev = oldTail;
    oldTail.next = newNode;
    return this;
  }

  insertAtPosition(pos, data) {
    // creating and storing the new node with data.
    const newnode = new Node(data);
    let cur = this.head;

    // using another pointer to traverse the linked list till position given.
    for (let i = 0; i < pos; i++) {
      cur = cur.next;
    }
    // if the node next to node at given position is null, we make the next
    // as new node and new node's previous link as this current node.
    if (cur.next === null) {
      cur.next = newnode;
      newnode.prev = cur;
    } else {
      // storing next node to current node in link part(next) of new node.
      newnode.next = cur.next;

      // storing new node in link part(next) of current node.
      cur.next = newnode;

      // storing the new node in previous link part(prev) of the node
      // which was next to current node initially.
      newnode.next.prev = newnode;

      // store the current node in previous link part(prev) of new node.
      newnode.prev = cur;
    }
  }

  forwardTraverse() {
    let current = this.head;
    while (current) {
      console.log(current.data, '->');
      current = current.next;
    }
  }
}

const mainFunction = () => {
  const DLL = new DoubleLinkedList();
  DLL.insertAtHead(4);
  DLL.insertAtHead(3);
  DLL.insertAtHead(2);
  DLL.insertAtHead(1);
  DLL.insertAtEnd(5);
  DLL.insertAtEnd(6);
  DLL.insertAtEnd(7);
  DLL.insertAtEnd(8);
  DLL.insertAtPosition(4, 44);
  DLL.forwardTraverse();
};

mainFunction();

exports = {
  mainFunction,
};

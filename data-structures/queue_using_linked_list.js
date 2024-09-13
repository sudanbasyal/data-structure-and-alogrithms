class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  enqueue(data) {
    let node = new Node(data);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }
  dequeue() {
    if (this.head === null) {
      this.tail = null;
      return "Queue is empty";
    }
    if (this.head === this.tail) {
      let data = this.head.data;
      this.head = null;
      this.tail = null;
      return data;
    }

    let data = this.head.data;
    this.head = this.head.next;
    return data;
  }
  has_elements() {
    return this.head !== null;
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

console.log(queue.dequeue()); // 1
console.log(queue);

console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // Queue is empty
queue.enqueue(4);
console.log(queue);
console.log(queue.has_elements());

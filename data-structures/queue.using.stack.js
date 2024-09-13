// Implement Queue Using Two Stack

class Stack {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enqueue(val) {
    this.s1.push(val);
  }

  dequeue() {
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2.pop();
  }

  // return last element from the queue
  peek() {
    if (!this.s2.length) {
      while (this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }

    return this.s2[this.s2.length - 1];
  }

  empty() {
    return !this.s1.length && !this.s2.length;
  }
}

const stack = new Stack();

stack.enqueue(1);
stack.enqueue(2);

stack.enqueue(3);
stack.enqueue(4);

stack.dequeue();
stack.dequeue();
stack.dequeue();
stack.dequeue();

console.log(stack.empty());

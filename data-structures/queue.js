class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length === 0) {
      return "Queue is Empty";
    }
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  getSize() {
    return this.items.length;
  }
}

const cars = new Queue();

cars.enqueue("BMW");
cars.enqueue("Audi");
cars.enqueue("Mercedes");
console.log(cars);
console.log(cars.peek());
cars.dequeue();
console.log(cars);
cars.dequeue();
console.log(cars);
console.log(cars.peek());

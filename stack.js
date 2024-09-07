class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) {
      return "Stack is Empty";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  getSize() {
    return this.items.length;
  }
}

const cars = new Stack();

cars.push("BMW");
cars.push("Audi");
cars.push("Mercedes");

console.log(cars);

cars.pop();
console.log(cars);
console.log(cars.peek());
console.log(cars.getSize());
cars.push("Toyota");
console.log(cars);

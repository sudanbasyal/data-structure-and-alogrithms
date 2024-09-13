class StackUsingQueues {
  constructor() {
    this.queue1 = []; // Main queue to store stack elements
    this.queue2 = []; // Temporary queue used during push
  }

  // Push operation: add an element to the stack
  push(x) {
    console.log(`\n--- Pushing ${x} ---`);

    // Step 1: Add the new element to queue2
    this.queue2.push(x);
    console.log(`Step 1: queue2 after adding ${x}: [${this.queue2}]`); // e.g., queue2: [3]

    // Step 2: Move all elements from queue1 to queue2
    while (this.queue1.length > 0) {
      const movedElement = this.queue1.shift();
      this.queue2.push(movedElement);
      console.log(
        `Step 2: Moving element ${movedElement} from queue1 to queue2`
      );
      console.log(`queue1: [${this.queue1}], queue2: [${this.queue2}]`); // After moving elements
    }

    // Step 3: Swap the queues (make queue2 the main queue)
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
    console.log(`Step 3: Swap the queues`);
    console.log(`queue1: [${this.queue1}], queue2: [${this.queue2}]`); // queue1 now has the stack order
  }

  // Pop operation: remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    const poppedElement = this.queue1.shift(); // Remove and return the front of queue1
    console.log(`Popped: ${poppedElement}`);
    return poppedElement;
  }

  // Peek operation: get the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    return this.queue1[0]; // The front of queue1 is the top of the stack
  }

  // Check if the stack is empty
  isEmpty() {
    return this.queue1.length === 0;
  }
}

// Example usage:
const stack = new StackUsingQueues();

stack.push(1); // Pushing 1 onto the stack
stack.push(2); // Pushing 2 onto the stack
stack.push(3); // Pushing 3 onto the stack

console.log(stack);
console.log(stack.peek()); // Peek the top element
console.log(stack.pop()); // Pop the top element
console.log(stack)

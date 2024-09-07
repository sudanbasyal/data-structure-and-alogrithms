class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert_at_beginning(data) {
    let node = new Node(data);
    if (this.head !== null) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  insert_at_end(data) {
    let node = new Node(data);
    if (this.head !== null) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  remove_at_beginning() {
    if (this.head === null) {
      return "List is empty";
    }
    let data = this.head.data;
    this.head = this.head.next;

    // If the list is now empty after removing the head, update the tail to null
    if (this.head === null) {
      this.tail = null;
    }

    return data;
  }

  remove_at_end() {
    if (this.head === null) {
      return "List is empty";
    }

    // If there's only one node
    if (this.head === this.tail) {
      let data = this.head.data;
      this.head = null;
      this.tail = null;
      return data;
    }

    // If there are multiple nodes, traverse to find the second-last node
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }

    let data = this.tail.data;
    this.tail = current;
    this.tail.next = null; // Disconnect the last node

    return data;
  }
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

// Example usage:
const list = new LinkedList();
list.insert_at_beginning(1);
list.insert_at_beginning(2);
list.insert_at_end(3);
list.insert_at_end(4);
console.log(list.search(3));
console.log(list);
console.log(list.remove_at_end());
console.log(list.remove_at_end());
console.log(list.remove_at_end());
console.log(list.remove_at_end());
console.log(list.remove_at_end());

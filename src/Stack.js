// Creates a node containing the data and a reference to the next item
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Define the 'Stack' class
class Stack {
  // The constructor for the 'Stack' class is nice and straightforward
  // You start with an empty first node, represented by null. This indicates the top of the stack.
  constructor() {
    this.top = null;
  }

  // Add a 'push()' method to the 'Stack' class
  push(value) {
    // Create a new node, add data to the new node, and have the pointer point to the top
    this.top = new Node(value, this.top);
    return this;
  }

  // Add a 'pop()' method to the 'Stack' class
  pop() {
    // In order to remove the top of the stack, you have to point the pointer to the next item.
    // That next item becomes the top of the stack.
    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }
}

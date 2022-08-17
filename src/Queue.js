// Creates a node containing the data and a reference to the next item
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define the 'Stack' class
class Queue {
  // The constructor for the 'Queue' class is nice and straightforward
  // You start with an empty first node and an empty last node, both represented by null.
  constructor() {
    this.first = null;
    this.last = null;
  }

  // Add a 'enqueue()' method to the 'Queue' class
  enqueue(value) {
    const newNode = new Node(value);

    if (this.first) {
      this.last.next = newNode;
    } else {
      // Set the node of the queue's next pointer to be the new node
      this.first = newNode;
    }

    // Make the new node the last item on the queue
    this.last = newNode;
  }

  // Add a 'dequeue()' method to the 'Queue' class
  dequeue() {
    if (this.first) {
      const dequeued = this.first;

      // Update first pointer to point to the next node of the dequeued node
      this.first = dequeued.next;

      // If the dequeued node is the last node in the queue,
      // update the last pointer to point to `null`
      if (dequeued === this.last) {
        this.last = null;
      }

      return dequeued.value;
    }
  }
}

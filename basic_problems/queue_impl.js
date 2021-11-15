class Queue {
  constructor() {
    this.container = {};
    this.index = -1;
    this.length = 0;
  }

  enqueue(element) {
    this.container[this.index + 1] = element;
    this.index++;
    this.length++;
  }

  dequeue() {
    if (this.length > 0) {
      let dequeued = this.container[0];
      let key;
      for (key in this.container) {
        this.container[key] = this.container[Number(key + 1)];
      }
      delete this.container[key];

      this.index--;
      this.length--;
      return dequeued;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

let q1 = new Queue();

q1.enqueue(10);
q1.enqueue(20);
console.log(q1.isEmpty());
q1.dequeue();
q1.dequeue();
q1.dequeue();
console.log(q1.isEmpty());
console.log(q1);

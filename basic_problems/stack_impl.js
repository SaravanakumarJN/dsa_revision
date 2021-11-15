class Stack {
  constructor() {
    this.container = {};
    this.index = -1;
    this.length = 0;
  }

  push(ele) {
    this.index++;
    this.container[this.index] = ele;
    this.length++;

    return this.container;
  }

  pop() {
    if (this.length > 0) {
      delete this.container[this.index];
      this.index--;
      this.length--;
    }

    return;
  }

  top() {
    return this.container[this.index];
  }

  getStack() {
    return Object.values(this.container);
  }
}

const stack1 = new Stack();

stack1.push(10);
stack1.pop();
stack1.pop();
console.log(stack1.top());

console.log(stack1.getStack());

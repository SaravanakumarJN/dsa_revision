function NewNode(ele, next = null) {
  this.element = ele;
  this.next = next;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addEle(ele) {
    let to_add = new NewNode(ele);
    if (this.length == 0) {
      this.head = to_add;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = to_add;
    }

    this.length++;
    return this.head;
  }

  addAtIndex(ele, index) {
    let to_add = new NewNode(ele);
    if (index >= 0 && index <= this.length) {
      if (index == 0) {
        to_add.next = this.head;
        this.head = to_add;
      } else {
        let current = this.head;

        let i = 1;
        while (current.next !== null && i < index) {
          current = current.next;
          i++;
        }

        to_add.next = current.next;
        current.next = to_add;
      }
      this.length++;
    }
  }

  remove_ele() {
    if (this.head) {
      if (this.length == 1) {
        this.head = null;
      } else {
        let current = this.head;
        let i = 1;
        while (current.next !== null && i < this.length - 1) {
          current = current.next;
        }
        current.next = null;
      }
      this.length--;
    }
  }

  remove_at_index(index) {
    if (index >= 0 && index < this.length) {
      if (index == 0) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let i = 1;
        while (current.next !== null && i < index) {
          current = current.next;
          i++;
        }

        current.next = current.next.next;
      }
      this.length--;
    }
  }

  print_ele() {
    let current = this.head;
    while (current) {
      console.log(current.element);
      current = current.next;
    }
  }
}

let ll1 = new LinkedList();
ll1.addEle(10);
ll1.addEle(11);
ll1.addAtIndex(1, 0);
// ll1.remove_at_index(0);
console.log(ll1);
ll1.remove_ele();
ll1.remove_ele();
ll1.remove_ele();
// ll1.print_ele();
console.log(ll1);

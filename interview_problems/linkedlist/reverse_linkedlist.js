let LL = {
  head: {
    val: 10,
    next: {
      val: 20,
      next: {
        val: 30,
        next: {
          val: 40,
          next: null,
        },
      },
    },
  },
  length: 4,
};

let prev = null;
let curr = LL.head;

while (curr.next) {
  let temp = curr.next;
  curr.next = prev;
  prev = curr;
  curr = temp;
}
curr.next = prev;
LL.head = curr;

console.log(LL);

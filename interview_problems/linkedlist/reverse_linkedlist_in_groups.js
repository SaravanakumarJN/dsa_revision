let LL = {
  head: {
    val: 10,
    next: {
      val: 20,
      next: {
        val: 30,
        next: {
          val: 40,
          next: {
            val: 50,
            next: null,
          },
        },
      },
    },
  },
  length: 5,
};

let k = 3;

let temp_store = [];

let i = 0;
let j = 0;
let current = LL.head;

while (current.next) {
  if (i < k) {
    temp_store[j] = current;
    current = current.next;
    i++;
    j++;
  } else {
    for (let j = 0, k = temp_store.length - 1; j < k; j++, k--) {
      let swapper = temp_store[j].val;
      temp_store[j].val = temp_store[k].val;
      temp_store[k].val = swapper;
    }
    i = i % k;
  }
}
LL.head = temp_store[0];
console.log(LL);

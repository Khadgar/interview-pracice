module.exports = {
  mergeSortedLists(L1, L2) {
    console.log("hello");
  },

  sort(list) {
    console.log("sort list");
    let current = list.head;
    let swapped = true;
    while (swapped) {
      swapped = false;
      while (current !== null) {
        if (current.next !== null) {
          if (current.data > current.next.data) {
            let tempData = current.next.data;
            current.next.data = current.data;
            current.data = tempData;
            swapped = true;
          }
        }
        current = current.next;
      }
      current = list.head;
    }
  },

  sortRewire(list) {
    console.log("sort list");
    let current = list.head;
    let next = null;
    let swapped = true;

    let min = list.head;
    let dummyHead = min;
    while (current !== null) {
      if (current.data < min.data) {
        min = current;
        dummyHead.next = current;
        dummyHead = current;
      }
      current = current.next;
    }
    list.head = dummyHead;
  }
};

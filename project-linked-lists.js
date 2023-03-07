/* Node */
const Node = (value = null, nextNode = null) => ({value, nextNode});

/* LinkedList */
const LinkedList = () => {
  const list = [];
  return {
    list: list,
    prepend: (value) => {
      let node = Node(value);
      list.unshift(node);
      list.length > 1 ? (list[0].nextNode = list[1].value) : null;
    },
    append: (value) => {
      let node = Node(value);
      list.push(node);
      list.length > 1 ? (list[list.length - 2].nextNode = list[list.length - 1].value) : null;
    },
    insertAt: (value, index) => {
      let node = Node(value);
      index === 0 ? list.splice(index, 0, node) : null;
      list[index - 1] ? list.splice(index, 0, node) : null;
      list[index - 1] ? (list[index - 1].nextNode = list[index].value) : null;
      list[index + 1] ? (list[index].nextNode = list[index + 1].value) : null;
    },
    pop: () => {
      list.length > 0 ? list.pop() : null;
      list[list.length - 1] ? (list[list.length - 1].nextNode = null) : null;
    },
    removeAt: (index) => {
      list[index] ? list.splice(index, 1) : null;
      list[index - 1] && list[index] ? (list[index - 1].nextNode = list[index].value) : null;
      list[index - 1] && !list[index] ? (list[index - 1].nextNode = null) : null;
    },
    size: () => list.length,
    head: () => (list.length > 0 ? list[0] : null),
    tail: () => (list.length > 0 ? list[list.length - 1] : null),
    at: (index) => (list[index] ? list[index] : null),
    contains: (value) => {
      let n;
      for (node of list) {
        node.value === value ? (n = node) : null;
      }
      return n && n.value === value ? true : false;
    },
    find: (value) => {
      let n;
      for (node of list) {
        node.value === value ? (n = node) : null;
      }
      return n && n.value === value ? list.indexOf(n) : null;
    },
    toString: () => JSON.stringify(list),
  };
};
const list = LinkedList();

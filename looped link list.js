/* Not a complete solution, this only works if you start at the beginning of the loop, not at the beginning of the list 
need to check a prev, work loop backwards, one will have two prev values.*/
function findBeginningOfLoopIfNoDuplication(node) {
  const allNodes = [];
  let temp = node.next;

  /* used a map to complete the challenge on code wars as .includes in an array isn't as performant as map.has() */
  while (temp) {
    if (!allNodes.includes(temp)) {
      allNodes.push(temp);
      temp = temp.next;
    } else {
      return temp;
    }
  }
}

function loopSize(node) {
  let counter = 1;
  let temp = node.next;

  if (temp === node) {
    return counter;
  }

  while (temp !== node) {
    counter++;
    temp = temp.next;
  }

  return counter;
}

class Node {
  constructor(next) {
    this.next = next;
  }

  setNext(value) {
    this.next = value;
  }

  getNext() {
    return this.next;
  }
}

const A = new Node();
A.setNext(A);

const B = new Node();
const C = new Node();
const D = new Node();

A.setNext(B);
B.setNext(C);
C.setNext(D);
D.setNext(B);

console.log(A);

console.log(loopSize(findBeginningOfLoopIfNoDuplication(A)));

/* This is a really clean way of doing it! v. clever! */

function loop_size(node) {
  let lastIndex = 0;
  let indices = new WeakMap(); //slightly different to a map, only uses objs as keys, and has garbage collection, no iteration or .size though
  while (indices.get(node) == null) {
    indices.set(node, lastIndex++);
    node = node.next;
  }
  return lastIndex - indices.get(node);
}

console.log(loop_size(A));

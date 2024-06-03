// ok so a loop is an O(n) operation
// So is shift()
// when they compound together, O(n^2). The only factor that I could be failing to consider is that we've always looked at the complexity of for loops, to my knowledge, not while loops. But bonsidering that the nature of a loop is the same either way (it must iterate through every element of the array, whcih is what we're iterating through here), this distinction shouldn't change the time complexity.

class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.pop();
s.pop();
s.push(4);

const x = s.pop()

console.log(x)

class Queue {
    constructor() {
      this.data = [];
    }

    enqueue(value) {
      this.data.push(value);
    }

    dequeue() {
      return this.data.shift();
    }
  }


const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.dequeue();
q.enqueue(4);

const y = q.dequeue();

console.log(y);

//linked lists are O(n)

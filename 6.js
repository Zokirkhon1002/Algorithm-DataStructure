class Stack {
  /**
   * Stack Obyekt
   */
  constructor() {
    this.stack = [];
  }

  /**
   * bo'sh ekanligini tekshirish
   */
  isEmpty() {
    return this.stack.length == 0;
  }

  /**
   * Element qo'shish,
   * @param newData yangi elementni kiriting
   */
  add(newData) {
    this.stack.push(newData);
    return true;
  }

  /**
   * Elementni sug'urib olish
   */
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    } else {
      return this.stack.pop();
    }
  }
  /**
   * Eng ustki elementni ko'rish
   */
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    } else {
      let l = this.stack.length;
      return this.stack[l - 1];
    }
  }
}
const stack = new Stack();
stack.add(5);
stack.add(6);
stack.add(7);

console.log("Top element: ", stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
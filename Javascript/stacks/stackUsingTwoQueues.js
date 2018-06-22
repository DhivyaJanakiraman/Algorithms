var MyStack = function() {
  this.q1 = [];
  this.q2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  if (this.q1.length < 1 && this.q2.length < 1) {
    this.q1.push(x);
  } else if (this.q1.length > 0) {
    this.q1.push(x);
  } else if (this.q2.length > 0) {
    this.q2.push(x);
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.q1.length === 1 && this.q2.length === 1) {
    return "Stack empty";
  } else if (this.q1.length > 0 && this.q2.length <= 0) {
    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }
    return this.q1.pop();
  } else if (this.q2.length > 0 && this.q1.length <= 0) {
    while (this.q2.length > 1) {
      this.q1.push(this.q2.shift());
    }
    return this.q2.pop();
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.q1.length === 0 && this.q2.length === 0) {
    return [];
  } else if (this.q1.length > 0) {
    return this.q1[this.q1.length - 1];
  } else if (this.q2.length > 0) {
    return this.q2[this.q2.length - 1];
  }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q1.length === 0 && this.q2.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

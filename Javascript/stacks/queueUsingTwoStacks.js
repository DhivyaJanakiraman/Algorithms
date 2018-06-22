/*
Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.s1 = [];
  this.s2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if (this.s1.length === 0 && this.s2.length === 0) {
    this.s1.push(x);
  } else if (this.s1.length === 0 && this.s2.length > 0) {
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
    this.s1.push(x);
  } else {
    this.s1.push(x);
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.s1.length === 0 && this.s2.length === 0) {
    return "Queue is empty";
  } else if (this.s1.length > 0 && this.s2.length <= 0) {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
    return this.s2.pop();
  } else {
    return this.s2.pop();
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.s1.length === 0 && this.s2.length === 0) {
    return "Queue is empty";
  } else if (this.s1.length > 0) {
    return this.s1[this.s1.length - 1];
  } else {
    while (this.s2.length > 0) {
      this.s1.push(this.s2.pop());
    }
    return this.s1[this.s1.length - 1];
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.s1.length <= 0 && this.s2.length <= 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

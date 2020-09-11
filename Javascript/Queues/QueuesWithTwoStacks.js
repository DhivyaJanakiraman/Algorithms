let Queue = function() {
  this.s1 = [];
  this.s2 = []; 
}

Queue.prototype.enqueue = function(x){
  this.s1.push(x);
}

Queue.prototype.dequeue = function(){
  if(this.s1.length === 0 && this.s2.length === 0){
    return "No elements to return from Queue";
  }

  if(this.s2.length === 0){
    while(this.s1.length >=1){
      this.s2.push(this.s1.pop());
    }
    // return this.s2.pop();
  } 

  return this.s2.pop();
  
}

var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q)


/**
 *  push operation - o(1)
 *  pop operation - o(n)
 * 
 */
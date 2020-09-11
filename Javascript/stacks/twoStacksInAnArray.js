class twoStacks {
    constructor(n){
      this.size = n;
      this.arr = [];
      this.top1 = -1;
      this.top2 = n;
    }
  
    push1(data){
      if(this.top1 < this.top2 - 1){
        this.arr[++this.top1] = data;
      } else {
        console.log("cannot push on stack1")
        return false;
      }
    }
  
    push2(data){
      if(this.top1 < this.top2 - 1){
        this.arr[--this.top2] = data;
      } else {
        console.log("cannot push on stack2")
        return false;
      }
    }
  
    pop1(){
      if(this.top1 >= 0){
        let data = this.arr[this.top1];
        this.top1--;
        return data;
      }else{
        console.log("cannot pop on stack1")
        return false;
      }
    }
  
    pop2(){
      if(this.top2 < this.size){
        let data = this.arr[this.top2];
        this.top2++;
        return data;
      }else{
        console.log("cannot pop on stack2")
        return false;
      }
    }
  
  }
  
  let stack = new twoStacks(10);
  
  stack.push1('1');
  stack.push1('2');
  stack.push1('3');
  stack.push1('4');
  stack.push1('5');
  stack.push1('6');
  // stack.push1('11');
  
  stack.push2('7');
  stack.push2('8');
  stack.push2('9');
  stack.push2('10');
  stack.push2('11');
  
  console.log(stack)
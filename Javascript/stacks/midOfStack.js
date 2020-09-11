class DllNode{
    constructor(d){
        this.data = d;
        this.prev = null;
        this.next = null;
    }
};

class MyStack{
    constructor(){
        this.head = null;
        this.counter = 0;
    }

    push(data){
        var new_node = new DllNode(data);
        new_node.prev = null;
        new_node.next = this.head;

        this.counter += 1;

        // if counter vaalue is odd, adjust the mid pointer
        if(this.counter === 1){
            this.mid = new_node;
        } else {
            this.head.prev = new_node;
            if(this.counter % 2 !== 0){
                this.mid = this.mid.prev;
            }
        }

        this.head = new_node;
    }

    pop(){
        if(this.head === null || this.counter === 0){
            console.log("Stack is empty. Cannot perform delete");
            return false;
        }

        var data = this.head.data;
        this.head = this.head.next;

        if(this.head !== null){
            this.head.prev = null;
        }

        this.counter -= 1;

        if(this.counter % 2 !== 0){
            this.mid = this.mid.next;
        }

        return data;
    }


    findMiddle(){

        if(this.counter === 0){
            console.log("Stack is empty. cannot find mid element");
            return -1;
        }
        return this.mid.data;
    }
}

var ms = new MyStack();

ms.push(4);
ms.push(3);
ms.push(2);
ms.push(1);
ms.push(5);

console.log(ms.findMiddle());





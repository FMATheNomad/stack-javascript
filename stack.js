class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Push operation
    push(value) {
        const newNode = new Node(value);
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.size++;
        console.log(`${value} pushed to stack`);
    }

    // Pop operation
    pop() {
        if (!this.top) {
            console.log("Stack is empty");
            return null;
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        console.log(`${poppedValue} popped from stack`);
        return poppedValue;
    }

    // Display operation
    display() {
        if (!this.top) {
            console.log("Stack is empty");
            return;
        }
        let current = this.top;
        console.log("Stack elements:");
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display();
stack.pop();
stack.display();

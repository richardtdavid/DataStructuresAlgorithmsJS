// Create a custom stack 
class Stack {
    constructor(){
        this.count = 0;
        this.storage = {};
    }

    // Adds a value onto the end of the stack 
    push(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack 
    pop(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // Number of items in the stack
    size(){
        return this.count;
    }

    // Returns the value at the end of the stack 
    peek(){
        return this.storage[this.count - 1];
    }
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push('DavidMediaGroup');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

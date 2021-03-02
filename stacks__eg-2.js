// create a stack

let Stack = function() {
    this.count = 0;
    this.storage = {};

    // Add a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // remove and return the value at the end of the stack
    this.pop = function(value){
        if(this.count === 0) {
            return undefined; // if the get execute skip the following code of the function
        }

        this.count--; // decrement the count by one to get the last item of the stack
        let result = this.storage[this.count]; // put the last item into result
        delete this.storage[this.count]; // delete the item from the stack
        return result; 
    }

    // function will return the size of the stack
    this.size = function() {
        return this.count; 
    }

    // return the value of the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

let myStack = new Stack();

myStack.push('one');
myStack.push('two');
myStack.push('three');
myStack.push('four');
myStack.push('five');
console.log(myStack.pop()); // will remove the item that is on the top of the stack
console.log(myStack.peek()); // will display the item is on the top of the stack
console.log(myStack.size()); // will display the current size of the stack

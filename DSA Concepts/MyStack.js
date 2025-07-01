class MyStack{
    constructor(){
        this.items = [];
    }
    // Core stack operations
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.isEmpty()){
            throw new Error("Stack Underflow: Cannot pop from an empty stack.");
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            throw new Error("Stack Underflow : Cannot peek from an empty stack.");
        }
        return this.items[this.items.length-1];
    }
    // Helper functions
    isEmpty(){
        return this.items.length ===0;
    }
    size(){
        return this.items.length;
    }
    printStack(){
        return this.items.join(' ');
    }
}
// Usage Example
function useStack(){
    const stack = new MyStack();
    console.log("Is Empty?", stack.isEmpty());

    try{
     stack.pop();
    }catch(e){
        console.error(e.message);
    }
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log("Stack contents:", stack.printStack())
    console.log("Top Element:", stack.peek())
    console.log("Popped element:", stack.pop());
    console.log("Stack after pop:", stack.printStack())
}
// useStack();
module.exports={useStack};
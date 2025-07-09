function once(fn){
    let called = false;
    let result;

    return function(...args){
        if(!called){
            try{
                result = fn.apply(this,args);
                called = true;
            } catch(error){
                throw error;
            }
        }
        return result;
    };
}

const logOnce = once((name)=>{
    console.log("Hello", name);
    return "done";
});
logOnce("Alice");
logOnce("Bob");
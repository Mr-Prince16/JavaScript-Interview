function curry(fn){
    return function curried(...args){
        if(args.length>=fn.length){
            return fn(...args);
        }else{
            return function(...nextArgs){
                return curried(...args,...nextArgs)
            }
        }
    }
}
// ✅ Example function to test with
function add(a, b, c) {
    return a + b + c;
}

// ✅ Curry it
const curriedAdd = curry(add);

// ✅ Test cases
console.log(curriedAdd(1)(2)(3));     // → 6
console.log(curriedAdd(1, 2)(3));     // → 6
console.log(curriedAdd(1)(2, 3));     // → 6
console.log(curriedAdd(1, 2, 3));  
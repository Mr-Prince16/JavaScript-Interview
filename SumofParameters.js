function sum(...args){
    return args.reduce((acc, curr)=> acc+ curr, 0);
}
console.log(sum(1,3,10,12));
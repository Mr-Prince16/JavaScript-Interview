function groupBy(arr,key){
    let result ={}
    for(item of arr){
     const keyValue=item[key];
     if(!result.hasOwnProperty(keyValue)){
        result[keyValue]=[];
     }
     result[keyValue].push(item)
    }
    return result;
}

const x = groupBy([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 }
], 'age');

console.log(x);
function removeDuplicates(arr){
    const seen =new Set();
    const result = [];

    for(const item of arr){
        if(!seen.has(item)){
            seen.add(item);
            result.push(item);
        }
    }
    return result;
}
console.log(removeDuplicates([1,2,2,3,4,4]));

//Alternative solution
//const removeDuplicates = arr => [...new Set(arr)];
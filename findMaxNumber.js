function findMaxNumber(arr){
    if(arr.length ===0) return null;
    let max = arr[0];
    for(let i=1; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMaxNumber([1,3,6,7,20]))
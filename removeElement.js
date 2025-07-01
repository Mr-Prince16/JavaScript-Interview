const removeElement = function(arr,value){
let k=0;
for(i=0;i<arr.length;i++){
    if(arr[i]!==value){
        arr[k]=arr[i];
        k++;
    }
}
return k;
}
const nums = [0,1,5,2,2,2,3,4]
const valToRemove =2;
const k = removeElement(nums,valToRemove)
console.log(k);

console.log("Filtered array without", valToRemove, ":", nums.slice(0, k));
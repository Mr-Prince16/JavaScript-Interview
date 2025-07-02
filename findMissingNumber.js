function findMissingNumber(nums){
const n= nums.length;
const expectedSum = (n* (n+1))/2;
const actualSum=nums.reduce((acc,num)=>acc+num,0)
return expectedSum-actualSum
}
let x=findMissingNumber([3, 0, 1]);
console.log(x);
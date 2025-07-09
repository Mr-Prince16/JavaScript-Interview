function ThirdMax(arr){
    nums = [...new Set(arr)].sort((a,b)=>b-a);
    return (nums.length<=2) ? nums[0] : nums[2];
}

console.log(ThirdMax([1,3,10,20,4,6,100]))
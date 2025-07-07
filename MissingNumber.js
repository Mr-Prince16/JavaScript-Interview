var missingNumber=function(nums){
    const n=nums.length;
    let ans=0;
    for(i=1;i<=n;i++){
        ans ^=i;
    }
    for(i=0;i<=n;i++){
        ans ^=nums[i];
    }
    return ans;
}
console.log(missingNumber([3,0,1]))
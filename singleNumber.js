var singleNumber = function (nums) {
    let uniqNum = 0;
    for (let i = 0; i < nums.length; i++) {
        uniqNum = uniqNum ^ nums[i];
    }
    return uniqNum;
}

console.log(singleNumber([3,3,4,5,5,1,2]))
function customSort(arr){
    const chars=[];
    const nums = [];

    for(let item of arr){
        if(typeof item === 'string'){
            chars.push(item);
        }else if(typeof item ==='number'){
            nums.push(item);
        }
    }

    for(i=0;i<arr.length-1;i++){
        for(j=0;j<chars.length - i -1;j++){
            if(chars[j]>chars[j+1]){
                [chars[j],chars[j+1]]=[chars[j+1],chars[j]]
            }
        }
    }
    for(i=0; i<arr.length-1;i++){
        for(j=0;j<nums.length-i-1;j++){
            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
            }
        }
    }
    return [...chars,...nums];
}
const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input));
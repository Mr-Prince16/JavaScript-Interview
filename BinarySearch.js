function searchInsert(nums,target){
    var left=0;
    var right = nums.length-1;


    while(left<=right){
            let mid = Math.floor((left+right)/2);
        if(nums[mid]==target){
            return mid;
        }else if(nums[mid]>target){
            right = mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return left;
}
var x=[1,2,3,4,5,6,10,20,30,40,50]
var target = 20;
console.log(searchInsert(x,target))
function mergeArray(arr1,m,arr2,n){
    let i =m-1;
    let j=n-1;
    let k=m+n-1;
    //we have to fill the empty elements in arr1 by putting elements of arr2  and we iterate through behind i.e the end .
    while(j>=0){
        if(i>=0&&arr1[i]>arr2[j]){
            arr1[k--]=arr1[i--]
        }
        else{
            arr1[k--]=arr2[j--]
        }
    }
    return arr1;
}
let arr1=[1,3,4,0,0,0]
let m=3;
let arr2=[1,2,3];
let n=3;
console.log(mergeArray(arr1,m,arr2,n));
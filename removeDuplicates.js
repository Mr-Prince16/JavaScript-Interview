function removeDuplicates(arr){
    let i=1;
    for(let j=1;j<arr.length-1;j++){
        if(arr[j]!==arr[i-1]){
            arr[i]=arr[j];
            i++;
        }
    }
    return i;

}

let x=[1,1,2,2,3,3,4,4,4,6,7,8,9,10]
console.log(removeDuplicates(x));
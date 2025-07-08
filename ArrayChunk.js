function chunkArray(num,n){
 const result =[];

 for (i=0;i<num.length;i+=n){
    result.push(num.slice(i,i+n))
 }
 return result;
}

console.log(chunkArray([1,3,6,8,9,0],2))
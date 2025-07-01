function shuffle (array){
    const result = array.slice();

    for(i=result.length-1;i>0;i--){
        const j = Math.floor(Math.random()*(i+1));
        [result[i],result[j]]=[result[j],result[i]];
    }
    return result;
}
console.log(shuffle([1,3,5,7,9,12,15,16,19,99]));

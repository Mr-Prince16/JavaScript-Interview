var longestCommonPrefix = function (strs){
    if(strs.length ===0) return "";
    let prefix = strs[0]; // assuming that first word is the prefix
    // starting from 2nd word in the array
    for(i=1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!==0){
            prefix = prefix.slice(0,-1)
            if(!prefix) return "";
        }
    }
    return prefix;
}
console.log(longestCommonPrefix(["flower","flow","flight"]))

// Let's say prefix = "flower"

// The next word is "flow"

// "flow".indexOf("flower") returns -1 because it does NOT start with "flower"
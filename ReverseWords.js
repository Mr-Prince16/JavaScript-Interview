function reverseWords(sentence){
    return sentence.split(/(\s+)/)
    .map(part=> {
        return part.trim() ? part.split('').reverse().join('') : part;
    }).join('')
}
console.log("Hello World");
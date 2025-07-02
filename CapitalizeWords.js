function capitalizeWords(sentence){
return sentence.trim()
.split(/\s+/)
.map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
.join (' ')
}

console.log(capitalizeWords("hello world "));


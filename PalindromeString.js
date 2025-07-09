function validatePalindrome(str){
    //  Remove non-alphanuemric characters and convert to lowercase
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    //  Compare cleaned string with its reverse
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(validatePalindrome('madam'))
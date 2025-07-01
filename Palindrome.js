function Palindrome(num){
    let original = num
    let reversed =0;
    while(num>0){
        let remainder = num%10;
        reversed = reversed*10 + remainder;
        num=Math.floor(num/10);
    }
    return original === reversed;
}

console.log(Palindrome(122));
function isPalindrome(str){
    let i =0, j=str.length-1;
    while(i<=j){
        if(str[i]!==str[j]) return false;
        i++;
        j--;
    }
    return true;
}

let str =  "madam"
console.log(isPalindrome(str));
let str2 =  "hello"
console.log(isPalindrome(str2));
let str3 =  "racecar"
console.log(isPalindrome(str3));
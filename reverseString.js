function reverseArr(arr){
    let i=0, j=arr.length-1;
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr
}

function reverseStr(str){
    let splitedStr = str.split("");
    let reversedArray = reverseArr(splitedStr);
    return reversedArray.join("")
    
}
let str = "abcdefg"
console.log(reverseStr(str));




function add(arr,pos, value){
    if(pos<0 || pos>arr.length)
        return "Invalid position"


    // with extra space
    let newArr = [];
    for(let i=0; i<pos; i++){
        newArr[i] = arr[i];
    }
    arr[pos]=value;
    for(let i=pos+1; i<arr.length; i++){
        newArr[i] = arr[i]
    }

    // without using extra spaces
    // array.length++;
    // for(let i=arr.length-1; i>pos; i--){
    //     arr[i] = arr[i-1];
    // }
    // arr[pos] = value;


    
    return array;


}   


let array = [3,5,8,5,9,1];
console.log(array)

console.log(add(array,2,100))
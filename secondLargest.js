// better approch for it
function secondLargest(arr){
    if(arr.length<= 1){
        return "Array only contain only single element"
    }
    // finding largest
    let largest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i]>largest) largest = arr[i];
    }   
   
    
    // second largest
    let sLargest = -1;
    for(let i=0; i<arr.length; i++){
        if(sLargest !== 1 && arr[i] > sLargest &&arr[i]<largest){
            sLargest = arr[i];
        }
    }   
    return sLargest;
}
let array = [3,6,9,4,0,3];
console.log(secondLargest(array))

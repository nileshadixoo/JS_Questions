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


// optimal approch
function secondLargest2(arr){
    if(arr.length <=1) return "Invalid Input"
    let largest = arr[0];
    let sLargest = -1;
    for(let i=1; i<arr.length; i++){
        if(arr[i]>largest){
            sLargest = largest;
            largest = arr[i]
        }
       
        else if(arr[i] < largest && arr[i] > sLargest){
            sLargest = arr[i];
        }
    }
    return (sLargest === -1) ? "No second Largest Element" :sLargest;
}

let array = [3,6,9,4,0,3];
console.log(secondLargest(array))
console.log(secondLargest2(array));


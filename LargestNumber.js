function largestNumber(arr){
    let largest = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let array = [3, 5, 10000, 5, 99, 1]
console.log('Largest number in the given array is: ',largestNumber(array));

function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}


function bubbleSort(arr){
    for(let i=arr.length-1; i>=0; i--){
        for(let j=0; j<=i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
let arr = [13,46,24,52,20,9];
console.log(`Before sorting: `, arr);
console.log(`After sorting : `, bubbleSort(arr));


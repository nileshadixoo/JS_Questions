function partition(arr,low,high){
    let pivot = arr[low];
    let i = low;
    let j = high;
    while(i<j){
        while(pivot>=arr[i] && i<=high-1){
            i++;
        }
        while(arr[j]>pivot &&  j>=low+1){
            j--;
        }
        if(i<j){
            let temp = arr[i];
            arr[i]= arr[j];
            arr[j] = temp;
           
        }
    }
    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;
}

function quickSort(arr,low,high){
    if(low<high){
        let pIndex = partition(arr,low,high);
        quickSort(arr,low,pIndex-1);
        quickSort(arr,pIndex+1,high)
    }
}
function qs(arr){
    quickSort(arr,0,arr.length-1);
    return arr
}
let array = [3, 5, 8, 5, 99, 1];
console.log('Before sorting :',array);

console.log('After sorting :',qs(array));



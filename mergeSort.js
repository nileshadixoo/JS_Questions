
function merge(arr,low,mid,high){
    let tempArr = [];
    let left = low;
    let right = mid+1; // both are pointer int value

    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            tempArr.push(arr[left]);
            left++;
        }
        else{
            tempArr.push(arr[right])
            right++;
        }
    }

    while(left<=mid){
        tempArr.push(arr[left])
        left++;
    }
    while(right<=high){
        tempArr.push(arr[right]);
        right++;
    }

    // transfering all the element back to original array
    for(let i=low; i<=high; i++){
        arr[i] = tempArr[i-low];
    }
}
function mergeSort(arr,low,high){
    if(low>=high) return;
    let mid = Math.floor((low+high)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
}

let array = [3, 5, 8, 5, 99, 1];
mergeSort(array,0,array.length-1)
console.log(array);
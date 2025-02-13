function heapify(arr,n,root){
    let largest = root;
    let left= 2*root+1;
    let right=2*root+2;

    if(left<n && arr[left]>arr[largest]){
        largest = left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest = right;
    }

    if(largest !== root){
        let temp = arr[root];
        arr[root] = arr[largest];
        arr[largest] = temp;

        heapify(arr,n,largest)
    }
}

function heapsort(arr){
    let n = arr.length;
    

    // heapify
    for(let i=Math.floor(n/2); i>=0; i--){
        heapify(arr,n,i);
    }
    // extract one element from end and move to front
    for(let i=n-1; i>=0; i--){
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;

        heapify(arr,i,0)
    }
}

let arr = [9, 4, 3, 8, 10, 2, 5];
console.log('before sort',arr);

heapsort(arr);
console.log(arr)
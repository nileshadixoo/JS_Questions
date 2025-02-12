function binarySearch(arr,low,high,target){
    if(low>high) return -1;
    let mid = Math.floor((low+high)/2)
    if(arr[mid]===target){
        return mid;
    }
    else if(arr[mid]<target){
        return binarySearch(arr,mid+1,high,target)
    }
    high = mid-1;
    return binarySearch(arr,low,mid-1,target);
}

function search(arr,target){
    return binarySearch(arr,0,arr.length-1,target);
}

let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 12;
let ind = search(a,target);
(ind==-1) ? console.log("No such element") :  console.log(`found at index : ${ind} `)

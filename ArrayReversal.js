
// using two pointer approch
function swap(a,b,arr){
    var temp;
    temp = arr[a];
    arr[a]=arr[b];
    arr[b]=temp;

}
function reverseArray(arr){
    let i=0,j=arr.length-1;
    while(i<j){
        swap(i,j,arr)
        i++;
        j--;
    }
    return arr;
}

let array = [1,2,3,4,5,6];
console.log(array);
// swap(0,5,array)
// console.log(array)
console.log(reverseArray(array))

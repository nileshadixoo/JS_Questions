
function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        var mini = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[mini]>arr[j]){
                mini = j;
            }
        }

        var temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;

    }
    return arr;
}

var array = [1,76,9,8,1,2,5]
console.log('Before sorting :', array);
console.log('After sorting :',selectionSort(array));

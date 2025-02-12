

function removeDup(arr){
    let j=0
     for(let i=1; i<arr.length; i++){
        if(arr[j]!==arr[i]){
            arr[j+1] = arr[i]
            j++;
        }
     }
    return arr.slice(0,j+1)
}


let arr = [1,1,3,6,6,8,9,9,9];
console.log(removeDup(arr))
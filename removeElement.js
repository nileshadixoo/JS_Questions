function removeElement(arr,pos){
    if(pos<0 || pos>=arr.length-1){
        return "Invalid Position"
    }
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        
        if(i==pos)continue;
        newArr.push(arr[i]);
    }
    return newArr;
}
let array = [3, 5, 8, 5, 99, 1];
pos = 4;
console.log(removeElement(array,pos))





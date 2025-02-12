function merge(arr1, arr2){
    let left = 0;
    let right = 0;
    let temp = [];
   while(left<arr1.length && right < arr2.length){
    if(arr1[left]<=arr2[right]){
        temp.push(arr1[left]);
        left++;
    }
    else{
        temp.push(arr2[right])
        right++;
    }
   }
   while(left<arr1.length){
    temp.push(arr1[left])
    left++;
   }
   while(right < arr2.length){
    temp.push(arr2[right])
    right++;
   }

   return temp;
}



let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9]
console.log(merge(arr1,arr2))
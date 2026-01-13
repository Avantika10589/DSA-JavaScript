// Linear Search in Array
// Find index of target element

let arr = [10, 25, 30, 45, 50];
let target = 30;

let index = -1;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]==target){
        index=arr[i];
        break;
    }
}
console.log(index)
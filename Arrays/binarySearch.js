// Binary Search in JS
// Find index of target element
// Time Complexity : O(log n)

let arr=[10,20,30,40,50];
let target= 40;

let left=0;
let right = arr.length-1;
let index= -1;

while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(arr[mid]=== target){
        index=mid;
        break;
    }else if(target<arr[mid]){
        right = mid -1;
    }else{
        left = mid+1;
    }
}
console.log(index)
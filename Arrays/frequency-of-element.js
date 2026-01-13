// Find frequency of an element in an Array
// Time Complexity: O(n) → traverse entire array
// Space Complexity: O(1) → only one variable used


let arr=[10,20,40,60,30,30];
let target= 30;

let count=0;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]===target){
        count++;
    }
}
console.log(count);
// DSA Problem: Second Largest Element in an Array
// Time Complexity: O(n)
// Space Complexity: O(1)

let arr = [12, 5, 7, 3, 19, 1];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]>largest){
        secondLargest= largest;
        largest=arr[i];
    }else if (arr[i]<largest && arr[i]>secondLargest){
        secondLargest=arr[i]
    }
}
console.log(secondLargest)

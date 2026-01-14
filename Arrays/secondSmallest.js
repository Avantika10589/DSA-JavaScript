// DSA Problem: Second Smallest Element in an Array
// Time Complexity: O(n)
// Space Complexity: O(1)

let arr = [12, 5, 7, 3, 19, 1];

let smallest = Infinity;
let secondSmallest = Infinity;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]<smallest){
        secondSmallest=smallest;
        smallest=arr[i];
    }else if(arr[i] >smallest  && arr[i]  <secondSmallest){
        secondSmallest=arr[i]
    }
}
console.log(secondSmallest)
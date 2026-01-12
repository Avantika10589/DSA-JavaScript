// Problem: Find maximum element in an array
// Input: [12, 5, 8, 20, 3]
// Output: 20
// Approach: Linear traversal
// Time Complexity: O(n)
// Space Complexity: O(1)

let arr = [12, 5, 8, 20, 3];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);

// Problem: Maximum Sum of Subarray of Size K
// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: 9
// Approach: Sliding Window
// Time Complexity: O(n)
// Space Complexity: O(1)

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

let left = 0;
let windowSum = 0;
let maxSum = 0;

for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    // when window size becomes k
    if (right - left + 1 === k) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum = windowSum- arr[left];
        left++;
    }
}

console.log(maxSum);


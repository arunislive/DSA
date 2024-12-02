Two Sum Problem
Description
The Two Sum problem involves finding two numbers in an array that add up to a specific target value. This repository contains a solution to the problem, including an optimized approach to improve time and space efficiency.

Problem Statement
Given an array of integers nums and a target integer target, return the indices of the two numbers such that they add up to the target.

You may assume that:

Each input has exactly one solution.
You cannot use the same element twice.
Example
Input:
javascript
Copy code
nums = [2, 7, 11, 15];
target = 9;
Output:
javascript
Copy code
[0, 1]
Explanation: The numbers at indices 0 and 1 (i.e., 2 and 7) add up to 9.

Brute Force Approach
Code:
javascript
Copy code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let indexes = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indexes.push(i, j);
                return indexes;
            }
        }
    }
    return indexes;
};
Time Complexity:
Time Complexity: O(n²) (due to the nested loops).
Space Complexity: O(1) (only a small array to store indices).
Optimized Approach
Optimized Code:
javascript
Copy code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const numMap = new Map(); // To store numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the number needed to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return the indices of the two numbers
        }
        numMap.set(nums[i], i); // Add the current number to the map
    }
    return [];
};
Explanation:
Use a Hash Map:
Store each number and its index as you traverse the array.
For every number, calculate its complement (what you need to reach the target).
Check if the complement exists in the map. If yes, you've found the solution.
Single Loop:
The hash map reduces the need for a second loop, improving efficiency.
Example Walkthrough:
Input:

javascript
Copy code
nums = [2, 7, 11, 15];
target = 9;
Steps:

Initialize numMap as an empty map.
Iterate through nums:
i = 0:
nums[0] = 2, complement = 9 - 2 = 7.
numMap = {} → Add 2 to numMap: {2: 0}.
i = 1:
nums[1] = 7, complement = 9 - 7 = 2.
2 exists in numMap → Return [0, 1].
Time Complexity:
Time Complexity: O(n) (each number is processed once).
Space Complexity: O(n) (due to the hash map).
Comparison of Approaches
Approach	Time Complexity	Space Complexity	Explanation
Brute Force	O(n²)	O(1)	Uses nested loops to find the solution.
Optimized	O(n)	O(n)	Uses a hash map to track complements.
How to Run the Code
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/two-sum.git
cd two-sum
Run the code:
bash
Copy code
node twoSum.js
License
This project is licensed under the MIT License.

Acknowledgements
Thanks to the JavaScript community and the various resources that helped refine this solution.
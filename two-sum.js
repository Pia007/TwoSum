"use strict";
// TWO SUM

// CHALLENGE 
    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    // You may assume that each input would have exactly one solution, and you may not use the same element twice.
    // You can return the answer in any order.

    // EXAMPLES
       
        // Input: nums = [2,7,11,15], target = 9
        // Output: [0,1]
        // Output: Because nums[0] + nums[1] == 9, we return [0, 1]

        // Input: nums = [3,2,4], target = 6
        // Output: [1,2]

        // Input: nums = [3,3], target = 6
        // Output: [0,1]
 
function twoSum(arr, target) {
    let numsObj = {};
    
    for (let i = 0; i < arr.length; i++) {
        let someNum = arr[i];
        let numDifference = target - someNum;
        
    
        if (numsObj[someNum] !== undefined) {
            // numsObj[numDifference] = i
            return [numsObj[someNum], i]
           
        }
        else { 
            numsObj[numDifference] = i
        }
    }   
    return "Target not found!"
}




console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3,5], 6));
console.log(twoSum([1,2,3], 6));
console.log(twoSum([1,2,3,4,5], 8));
console.log(twoSum([1,3,10,11,14], 10));
console.log(twoSum([75,45,20,100,18], 145));



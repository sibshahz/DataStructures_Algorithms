/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startPointer=0;
    let currentPointer=Math.ceil(nums.length / 2);
    let endPointer=nums.length-1;

    //have to do it recursively
    if(currentPointer == target){
      return target;
    }else if(currentPointer > target){
      //move left;

    }else{
      //move right
      startPointer=currentPointer;
      currentPointer=Math.ceil(startPointer)
    }
    return {currentPointer,endPointer};
};

console.log(search([-1,0,3,5,9,12,15],9));

// 704. Binary Search
// Easy
// Topics
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
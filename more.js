var twoSum = function(nums, target) {
    //hash table
    var hash = {};

    for(let i=0; i<=nums.length; i++){
      //current number
        var currentNumber = nums[i];
        //difference in the target and current number
        var requiredNumber = target - currentNumber;
        // find the difference number from hashTable
        const index2 = hash[requiredNumber];

        // if number found, return index 
        // it will return undefined if not found
        if(index2 != undefined) {
            return [index2, i]
        } else {
           // if not number found, we add the number into the hashTable
            hash[currentNumber] = i;

        }
    }
};


console.log(twoSum([1,2,3,4,5,6,7],5));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4] ,6));
console.log(twoSum([3,3,5], 6));
console.log(twoSum([1,2,3], 6));
console.log(twoSum([1,2,3,4,5], 8));
console.log(twoSum([1,2,3,4,5], 10));
console.log(twoSum([1,2,3,4,5], 8));
console.log(twoSum([75,45,20,100,18], 145));
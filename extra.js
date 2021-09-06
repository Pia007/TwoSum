function twoSum(arr, target) {
    var map = [];
    var result = [];
 
    for (var i = 0; i < numbers.length; i++) {
        if (map[numbers[i]] != null) {
            index = map[numbers[i]];
            result[0] = index+1 ;
            result[1] = i+1;
            break;
        } else {
            map[target - numbers[i]] = i;
        }
    }
 
    return result;
}

console.log(twoSum([1,2,3,4,5,6,7],5));
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4] ,6));
console.log(twoSum([3,3,5], 6));
console.log(twoSum([1,2,3], 6));
console.log(twoSum([1,2,3,4,5], 8));
console.log(twoSum([1,2,3,4,5], 10));
console.log(twoSum([1,2,3,4,5], 8));
console.log(twoSum([75,45,20,100,18], 145));
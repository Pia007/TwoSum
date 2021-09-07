
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

// DOM Elements
const tsForm = document.getElementById("ts-form");
const outcome = document.getElementById("sumResponse");
const buttonSum = document.getElementById("check-sum");
const buttonReset = document.getElementById("reset-form");


// Hides outcome when form is cleared
function hideOutcome() {
    outcome.style.display ="none";
}

// CLEAR Form
function clearForm() {

    tsForm.reset();
    hideOutcome();
};

// PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON 
// Check Two Sum Button
buttonSum.addEventListener('click', function(e) {
    e.preventDefault();
});
buttonSum.addEventListener('click', twoSum);


// Reset Form Button
buttonReset.addEventListener('click', function(e) {
    e.preventDefault();
});
buttonReset.addEventListener('click', clearForm);
// function isFalse() {
//     if(twoSum = false){
//         outcome.style.display = "block";
//         outcome.style.color = "#FF1919";
//         outcome.innerHTML = "The sum of " + `${target}` + " is not in [" +`${arr}`+ "]"
//     } 
// }  

// Two Sum function        
function twoSum(arr, target) {
    var twoSum = true
    // get value of target 
    target = document.getElementById("targetNumber").value;

    // get DOM input and separates at each space between numbers
    arr = document.getElementById("randomNumbers").value.split(" ");

    // makes sure array is numbers
    arr = arr.map(Number)

    //sort the array lowest to highest
    arr.sort(function(a,b){return a-b});
    
    let numsObj = {};
    for (let i = 0; i < arr.length; i++) {
        let someNum = arr[i];
        let numDifference = target - someNum;
        
    
        if (numsObj[someNum] !== undefined ) {
            let indexOne = numsObj[someNum];
            let indexTwo = i;
            twoSum = true;
            outcome.style.display = "block";
            outcome.style.color = "#00FF2A";
            outcome.innerHTML = `${target}` + " is the sum of the values at indexes ["+`${indexOne}`+", " +`${indexTwo}`+"]."
            break;
        }else { 
            numsObj[numDifference] = i
 
        }
        if (numsObj[numDifference] = i) {
            outcome.style.display = "block";
            outcome.style.color = "#FF1919";
            outcome.innerHTML = "The sum of " + `${target}` + " is not in [" +`${arr}`+ "]"
        }
    }
}   






 

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
const tsForm = document.getElementById("ts-form");
const buttonSum = document.getElementById("check-sum");
const outcome = document.getElementById("sumResponse");

function hideOutcome() {
    outcome.style.display ="none"
}

// CLEARS the form 2.5sec after submission
function clearForm() {
    setTimeout(function() {
        tsForm.reset();
        hideOutcome();
        
    }, 3500);
};

// PREVENT THE DEFAULT BEHAVIOR OF THE BUTTON AND CALL CRITERIA EVALUATION FUNCTION
buttonSum.addEventListener('click', function(e) {
    e.preventDefault();
});
buttonSum.addEventListener('click', twoSum);


        
function twoSum(arr, target) {
    target = document.getElementById("targetNumber").value;
    arr = document.getElementById("randomNumbers").value.split(" ");
    arr = arr.map(Number)
    
    
    
    for (let i = 0; i < arr.length; i++) {
        let numsArr = [];
        
        let someNum = arr[i];
        let numDifference = target - someNum;
        // let numOne = numsObj[someNum]
        // let numTwo = numsObj[arr[numDifference]]

        // if(arr.value == " " || target.value == " "){
        //     outcome.innerHTML = "Please complete both fields"
        // }
        if(numsArr[arr[i]] != null){
            // index = numsArr[arr[i]];
            let numOne = numsObj[someNum]
            numsObj[numDifference] = i
            let numTwo = numsObj[numDifference]
            
            // let numTwo = numsObj[arr[numDifference]]
            // numOne = arr.indexOf(arr[i]);
            // numTwo = arr.indexOf(arr[numDifference])
            // outcomeArr[0] = index + 1;
            // outcomeArr[1] = i + 1;

            // numOne = outcomeArr[0] ;
            // numTwo = outcomeArr[1] ;
           
            outcome.style.color = "#00FF2A";
            outcome.innerHTML = "The sum of the values at ["+`${numOne}`+", " +`${numTwo}`+"] is " + `${target}`+ "."
            
            clearForm();
        }else {
            // numsArr[target - arr[i]] = i;
            outcome.style.color = "#FF1919";
            outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."
            arr.join(", ")
            clearForm();
        };
        
        // if(numsObj[someNum] !== undefined) {
        //     let numOne = numsObj[someNum]
           
        //     let numTwo = target - someNum;
        //     outcome.style.color = "#00FF2A";
        //     outcome.innerHTML = "The sum of the values at ["+`${numOne}`+", " +`${numTwo}`+"] is " + `${target}`+ "."
        //     clearForm();
        // }else if(numsObj.indexOf(numDifference) == false){
        //     outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."    
        // }else {
           //outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."
            // outcome.style.color = "#FF1919";
            // outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."
                
                // function allClear() {
                //     
                //     setTimeout(function() {
                //         tsForm.reset();
                //         hideOutcome();
                        
                //     }, 3500);

                // };
                // allClear();
            // arr = arr.join(", ")
            // outcome.style.color = "#FF1919";
            // return outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."
        //};
        // if(numsObj.indexOf(numDifference) == false){
        //     outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."
        // }else {
        //     numsObj[numDifference] != i; 
        // }
        // function allClear() {
        //     outcome.style.color = "#FF1919";
         //   outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."
        //     setTimeout(function() {
        //         tsForm.reset();
        //         hideOutcome();
                
        //     }, 3500);

        // };
        // allClear();
        // else {
        //     arr = arr.join(", ")
        //     outcome.style.color = "#FF1919";
        //     outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."

        // }
        // if (numsObj[numDifference] < i){
        //     arr.join(", ")
        //     outcome.style.color = "#FF1919";
        //     outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]." 
        // }
        
        
    } 
    
    // arr = arr.join(", ")
    // outcome.style.color = "#FF1919";
    // outcome.innerHTML = `${target}` + " is not the sum of any two numbers in [" + `${arr}`+"]."
    
    
}

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4] ,6));
// console.log(twoSum([3,3,5], 6));
// console.log(twoSum([1,2,3], 6));
// console.log(twoSum([1,2,3,4,5], 8));
// console.log(twoSum([1,2,3,4,5], 10));
// console.log(twoSum([1,2,3,4,5], 8));
// console.log(twoSum([75,45,20,100,18], 145));

// Use `${variable} + ${variable}` to get printout in html




 
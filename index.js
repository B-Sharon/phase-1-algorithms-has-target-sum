function hasTargetSum(array, target) {
  //Initialize two empty sets to keep track of the numbers seen so far and the unique numbers
  let set = new Set();
  let seen = new Set();

  //for loop to iterate through the array
  for (let i = 0; i < array.length; i++) {

    //calculate the complement with respect to the target sum
    let complement = target - array[i];

    //if the complement is in the set, return true because we have found a pair that adds up to the target sum
    if (seen.has(complement)) {
      return true;
    }

    // Add the current number to the seen set, return true 
    set.add(array[i]);
    seen.add(array[i]);
    
  }

  //if no pair of numbers in the array adds up to the target sum, return false
  return false;
}


/* 
  Write the Big O time complexity of your function here
  O(n) because we iterare through the array once and perform constant time operations on each element.
*/

/* 
  Add your pseudocode here
  iterate through the input array
    for loop to iterate through the each number from index 0 to the length of the array minus one
      calculate the complement with respect to the target sum
      if the complement is in the set, return true
      add the current number to the set and mark it as "seen"
      if we finish iterating through the array, return false
*/

/*
  Add written explanation of your solution here
  The function takes in two inputs, an array and the sum target. 
  We initialize two empty sets to keep track of the numbers seen so far and the unique numbers.
  We iterate through the array and calculate the complement with respect to the target sum. 
  If the complement is in the set, we return true. 
  If we finish iterating through the array, we return false.
 


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  
}

module.exports = hasTargetSum;

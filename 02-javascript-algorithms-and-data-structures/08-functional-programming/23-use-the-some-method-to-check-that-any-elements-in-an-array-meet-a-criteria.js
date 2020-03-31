/**
 * Challenge: Use the some method inside the checkPositive function to check if any element in arr is positive.
 * The function should return a Boolean value.
 */

function checkPositive(arr) {
  return arr.some(num => num > 0);
}

checkPositive([1, 2, 3, -4, 5]); // true

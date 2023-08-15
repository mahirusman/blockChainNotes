"use strict";

function logThis() {
  console.log(this); // Outputs undefined in strict mode
}

logThis();

// var octalNum = 0123;
// console.log(octalNum);

function here() {}

// Example 2: Using setTimeout

setTimeout(() => {
  console.log("Inside setTimeout");
}, 10);

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 10);
});

promise.then((result) => {
  console.log(result);
});

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage:
const array = [5, 1, 3, 8, 1];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 8

function validateRegex(regex) {
  const stack = [];
  const openingBrackets = "([{";
  const closingBrackets = ")]}";

  for (let char of regex) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpenBracket = stack.pop();
      if (!lastOpenBracket) {
        return false; // More closing brackets than opening brackets
      }
      // Check if the lastOpenBracket matches the current closing bracket
      if (
        (lastOpenBracket === "(" && char !== ")") ||
        (lastOpenBracket === "[" && char !== "]") ||
        (lastOpenBracket === "{" && char !== "}")
      ) {
        return false; // Mismatched brackets
      }
    }
  }

  // If the stack is empty, the regex is valid.
  return stack.length === 0;
}

function generateFibonacciSeries(n) {
  const fibonacciSeries = [0, 1];

  for (let i = 2; i < n; i++) {
    const nextNumber = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    fibonacciSeries.push(nextNumber);
  }

  return fibonacciSeries;
}

// Generate and print the first 10 numbers in the Fibonacci series
// const n = 10;
// const fibonacciSeries = generateFibonacciSeries(n);
// console.log(fibonacciSeries);

function hasPairWithSum(arr, targetSum) {
  const numSet = new Set();

  for (let num of arr) {
    const complement = targetSum - num;

    console.log("complement", complement);
    if (numSet.has(complement)) {
      return true; // Found a pair with the target sum
    }

    numSet.add(num);
  }

  return false; // No pair with the target sum found
}

// Example usage:
const numbers = [5, 2, 1];
const target = 10;

if (hasPairWithSum(numbers, target)) {
  console.log("There is a pair with the target sum.");
} else {
  console.log("No pair with the target sum found.");
}

const flattenArray = (arr) => {
  return [].concat(
    ...arr.map((item) => (Array.isArray(item) ? flattenArray(item) : item))
  );
};

const sds = [1, 2, 3, [7, 2, 6, 8, [89, 54, 23, 5, 7]]];

const flattenedArray = flattenArray(sds);

const array = [1, 2, -10, -10, 3, 6];

// const uniqueArray=array.filter((data,index,value)=>{
//     return value.indexOf(data)==index
// })
// const obj={}
// array.forEach(element => {
//     if(obj[element]){
//         obj[element]++
//     }else{
//         obj[element]=1
//     }
// });

// const sum=array.reduce((pre,curr,index,value)=>{
//     return pre+curr
// })

// console.log('sum',sum)

//  const results= hasSumEqualToNumber(array,9)

//  console.log('results',results)

// for (var i = 0; i < array.length; i++) {
//     ((i)=>{
//         setTimeout(() => {
//             console.log(array[i]);
//         }, 1000);
//     })(i)
// }

var i = 3;

function Name(params) {
  console.log(i);

  var i = 10;
}
// Name();

function Factorial(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return n * Factorial(n - 1);
}
const sfsdfs = Factorial(3);
console.log({ sfsdfs });

function flattenArray(arr) {
  let flattened = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  });

  return flattened;
}

const arr = [1, 2, 3, 8, [1, 3, [9, 4]]];
const flattenedArray = flattenArray(arr);

// console.log(flattenedArray);

// Output: [1, 2, 3, 8, 1, 3, 9, 4]

// function FlatObject(obj, prefix = "") {
//   let flattened = {};
//   for (const key in obj) {
//     if (typeof obj[key] == "object" && obj[key] !== null) {
//       let nestedObj = FlatObject(obj[key], prefix + key + ".");
//       flattened = { ...flattened, ...nestedObj };
//     } else {
//       flattened[prefix + key] = obj[key];
//     }
//   }

//   return flattened;
// }

// console.log("FlatObject", FlatObject({ a: 10, b: { a: 1, b: 1 } }));

const dobleCat = array.some((data, index) => array.indexOf(data) != index);

// console.log("dobleCat", dobleCat);

// console.log(5 > 4 > 3);
// console.log(0.1 + 0.2 == 0.3);
// let x = { a: 1 };
// let y = { a: 1 };
// console.log(x == y);

// function here(name) {
//   this.firstname = name;
// }

// console.log("with new", new here("Usman"));
// console.log("with out new", here("Usman"));

// console.log(0 ?? 10);
// console.log(5 || 10);

// let x,
//   y = 10;
// console.log("here", x, y);

// let x1 = (y1 = 10);
// console.log("there", x1, y1);

// write a program in js which print first non repeating element

function SearchingChallenge(str) {
  // __define-ocg__ Function to find the first non-repeating character in a string
  var charCount = {};
  var nonRepeatingChars = [];

  // Count occurrences of each character
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
      nonRepeatingChars.push(char);
    }
  }
  console.log("nonRepeatingChars", nonRepeatingChars);
  console.log("charCount", charCount);

  // Find the first non-repeating character
  for (var j = 0; j < nonRepeatingChars.length; j++) {
    if (charCount[nonRepeatingChars[j]] === 1) {
      return nonRepeatingChars[j];
    }
  }
}

// Example usage:
// console.log(SearchingChallenge("agettkgaeee"));

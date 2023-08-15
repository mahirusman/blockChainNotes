const array = [1, 2, -10, 3, 6];

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

function hasSumEqualToNumber(array, targetSum) {
  const visitedNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    const difference = targetSum - currentNumber;

    if (visitedNumbers.has(difference)) {
      return true;
    }

    visitedNumbers.add(currentNumber);
  }

  return false; // No pair found with the given sum
}

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

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

var count = 10;
for (var i = 0; i < count; i++) {
  // console.log(fibonacci(i));
}

// function Factorial(n) {
//   if (n == 0 || n == 1) {
//     return n;
//   }
//   return n * (n - 1);
// }
// const sfsdfs = Factorial(0);
// console.log(sfsdfs);

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
console.log(flattenedArray);
// Output: [1, 2, 3, 8, 1, 3, 9, 4]

function FlatObject(obj, prefix = "") {
  let flattened={}
  for (const key in obj) {
    if (typeof obj[key] == "object" && obj[key] !== null) {
      let nestedObj = FlatObject(obj[key], prefix + key + ".");
      flattened = { ...flattened, ...nestedObj };
    
  }else{
    flattened[prefix+key]=obj[key]
  }}

  return flattened
}

console.log('FlatObject',FlatObject({a:10,b:{a:1,b:1}}))
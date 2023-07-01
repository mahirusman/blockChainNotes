const array=[1,2,-10,3,6]

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


const sum=array.reduce((pre,curr,index,value)=>{
    return pre+curr
})

console.log('sum',sum)



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

 const results= hasSumEqualToNumber(array,9)

 console.log('results',results)
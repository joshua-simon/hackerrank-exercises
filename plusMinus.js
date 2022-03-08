//Plus minus

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

//function operation:

// eg, for positive numbers:
//loop through array. have a conditional that says 'if number positive, add one to positiveCount variable'. 
//positiveCount/arr.length will give ratio of positive numbers in array

const plusMinus = (arr) => {
    let positiveCount = 0
    let negativeCount = 0
    let zeroCount = 0
    for(let i=0; i<arr.length; i++){
      const absNumber = Math.abs(arr[i])
      if(arr[i] === absNumber && arr[i] !== 0){
        positiveCount++
      }else if(arr[i] !== absNumber && arr[i] !== 0){
        negativeCount++
      }else if(arr[i]==0){
        zeroCount++
      }
    }
    console.log(Number(positiveCount/arr.length).toFixed(6))
    console.log(Number(negativeCount/arr.length).toFixed(6))
    console.log(Number(zeroCount/arr.length).toFixed(6))
  }
  
  
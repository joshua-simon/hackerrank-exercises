// Given five positive integers, find the minimum and maximum values 
//that can be calculated  by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

array = [1,3,5,7,9]

//for this example, min sum = 2+3+5+8, max sum = 3,5,8,9

//function method

//1.) arrange numbers lowest to highest
//2.) for min, sum first 4 numbers
//3.) for max, sum last 4 numbers

const minMaxSum = (arr) => {
  const sorted = arr.sort((a,b) => a-b)
  const max = sorted.slice(1).reduce((x,y) => x+y)
  const min = sorted.slice(0,4).reduce((x,y) => x+y)
  console.log(min + " " + max)
}



//Staircase

// Staircase detail

// This is a staircase of size n=4 :

//    #
//   ##
//  ###
// ####
// Its base and height are both equal to n . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

//function operation

//prints out right-aligned '#' symbols, incrementing one at a time per iteration until n is reached.
//eg, where n=3
//iteration 1:  #
//iteration 2: ##
//iteration 3:###
//  --> create a loop where output increases by one every iteration <--

const n=5

for(let i=1;i<=n;i++){
  const arr = Array(i).fill('#')
  console.log(arr.join(''))
}

//need to change this so that array is filled from
//last index to first index.
//so you start with an array of n length, fill the first position which is n-1,
//and for each interation fill from right to left
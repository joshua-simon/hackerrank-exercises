//Diagonal Difference

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.



//matrix example:

const testMatrix = [
    [1,2,3],
    [4,5,6],
    [9,8,9]
  ]
  
  //function operation:
  // 1.) sum numbers from the L -> R diagonal
  // 2.) Sum sumber from the R -> L diagonal
  // 3.) Calculate difference and return as absolute value
  
  //1.1 sum numbers L -> R
  //loop through upper array, and isolate integers at starting at index 0 for first array,
  //then incrementing index position by 1 as you move to next array
  
  //   const leftArray = []
  // for(let i=0; i<matrix.length; i++){
  //   leftArray.push(matrix[i][i])
  //   //for each iteration through loop, move index position by 1
  //   //iteration 1: matrix[i][0]
  //   //iteration 2: matrix[i][1]
  //   //iteration 3: matrix[i][2]
  // }
  
  
  // const rightArray = []
  // for(let i=0; i<matrix.length; i++){
  //   //for first iteration, start at last index of first array
  //   //iteration 1: matrix[0][2]
  //   //iteration 2: matrix[1][1]
  //   //iteration 3: matrix[2][0]
  //   const position = matrix[i].length-1-i
  //   rightArray.push(matrix[i][position])
  // }
  
  
  
  const diagonalDifference = (matrix) => {
    
    const leftArray = []
    const rightArray = []
    
    for(let i=0;i<matrix.length;i++){
      leftArray.push(matrix[i][i])
      const position = matrix[i].length-1-i
      rightArray.push(matrix[i][position])
    }
    
    const leftTotal = leftArray.reduce((x,y) => x+y)
    const rightTotal = rightArray.reduce((x,y) => x+y)
    
    return Math.abs(leftTotal - rightTotal)
    
  }
  
  console.log(diagonalDifference(testMatrix)) // output = 2
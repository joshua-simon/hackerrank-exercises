const compareTriplets = (arr1,arr2)=>{
    const testArr =[]
    let aliceScore = 0
    let bobScore = 0
    for(let i=0;i<=arr1.length;i++){
      if(arr1[i]>arr2[i]){
        aliceScore+=1
      }else if(arr1[i]<arr2[i]){
        bobScore+=1
      }
    }
    return [aliceScore,bobScore]
  }
const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  function mattrix(arr1, arr2){
    const matr = [];
    for(let i = 0; i < arr1.length; i++){
      const row = [];
      for(let j = 0; j < arr1[i].length; j++){
        row.push(arr1[i][j] + arr2[i][j])
      }
      matr.push(row)
    }
    return matr;
  }
  
  console.log(mattrix(arr1, arr2));
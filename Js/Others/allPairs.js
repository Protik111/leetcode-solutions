const pair = [1, 2, 3, 4, 5];

function createPair(pair) {
  const logPair = [];
  for(let i = 0; i < pair.length; i++){
    for(let j = 0; j < pair.length; j++){
      logPair.push([pair[i], pair[j]]);
    }
  }
  return logPair;
};

console.log(createPair(pair));
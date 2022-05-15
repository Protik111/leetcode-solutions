const arr1 = ['a', 'b', 'c', 'd', 'a'];
const arr2 = ['x', 'y', 'z', 'c'];

//time complexity O(n^2)
//space complexity O(1)
function isMatched(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if(arr1[i] === arr2[j]){
        return true;
      }
    }
  }
  return false;
}

//time complexity O(n)
//space complexity O(n)
function isMatched2(arr1, arr2) {
  const map = new Set();
  for(let i = 0; i < arr1.length; i++){
    if(!map.has(arr1[i])){
      map.add(arr1[i]);
    }
  }
  for(let j = 0; j < arr2.length; j++){
    if(map.has(arr2[j])){
      return true;
    }
  }
  return false;
}

console.log(isMatched(arr1, arr2));
console.log(isMatched2(arr1, arr2));


//imperative way
const matched = arr1.some(item => arr2.includes(item))
console.log(matched);
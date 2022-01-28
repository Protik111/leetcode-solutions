//time complexity O(n^2)
var twoSum = function(nums, target) {
    const numsLength = nums.length;
    for(let i = 0; i < numsLength; i++){
        for(let j = 1; j < numsLength; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
};

const postionOfArr = twoSum([2,7,5,9], 9);
console.log(postionOfArr);


//time complexity O(n)
var twoSum2 = function(nums, target){
    const arrLength = nums.length;
    let map1 = new Map();
    for(let i = 0; i< arrLength; i++){
        let num1 = target - nums[i];
        if(map1.has(num1)){
            return [map1.get(num1), i]
        }
        map1.set(nums[i], i)
    }
}

const postionOfArr2 = twoSum2([11, 9, 3, 7], 14);
console.log(postionOfArr2);
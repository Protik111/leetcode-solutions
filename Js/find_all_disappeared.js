const findDisappearedNumbers = function(nums) {
    const missingNums = [];
    const num = new Set();
    for(let i of nums){
        if(!num.has(i)) num.add(i); //getting an unique set from nums array in num variable
    }
    console.log(num);
    let n = 1;
    while(n <= nums.length){
        if(!num.has(n)) missingNums.push(n);
        n++
    }
    return missingNums;
};

const nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));
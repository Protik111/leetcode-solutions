var singleNumber = function(nums) {
    let num = 0;
    for (let n of nums) {
        num = num ^= n
    }
    return num
};
console.log(singleNumber([2,2,1]));
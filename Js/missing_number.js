const missingNumber = function (nums) {
    const length = nums.length;
    let sum = ((length + 1) * length ) / 2;

    for (let i = 0; i < length; i++) {
        sum = sum - nums[i];
    }
    return sum;
};

console.log(missingNumber([3, 0, 1]));
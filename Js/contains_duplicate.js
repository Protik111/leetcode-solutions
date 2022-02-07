//imperative way
//time conplexity O(n^2)
const containDuplicates = (nums) => {
    for(let i = 0; i < nums.length; i++){
        const element = nums[i];
        for(let j=i+1; j < nums.length; j++){
            if(element === nums[j]){
                return true;
            }
        }
    }
    return false;
}
const nums = [1, 3, 5];
console.log(containDuplicates(nums));

//time complexity O(n)
var containsDuplicate = function (nums2) {
    // const map = {}
    // for (let i of nums) {
    //     if (map[i]) return true
    //     map[i] = true
    // }
    // return false

    const set = new Set(nums2);
    return set.size !== nums2.length
};

const nums2 = [1, 3, 5, 5];
console.log(containsDuplicate(nums2));

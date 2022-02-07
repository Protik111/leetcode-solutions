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

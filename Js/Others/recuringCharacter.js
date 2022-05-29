//O(n^2)
function recurryingChar(arr) {
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    return arr[i]
                }
            }
        }
        return undefined;
    }
    return undefined;
}

// time complexity -->> O(n)
// space complexity -->> O(n)
function recurryingChar2(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        // console.log(map[arr[i]]);
        if(map[arr[i]] !== undefined) {
            return arr[i]
        }else {
            map[arr[i]] = i;
        }
    }
}


console.log(recurryingChar2([2, 5, 5, 2, 8, 4]));
// console.log(recurryingChar([2, 5, 5, 2, 8, 4]));
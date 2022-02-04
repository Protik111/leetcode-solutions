var isPalindrome = function (x) {
    let str = x.toString();
    let strToArr = str.split("");
    let reversed = strToArr.reverse();
    const finalReversed = reversed.join('');
    if (x === parseInt(finalReversed)) {
        return true;
    } else {
        return false;
    }
};
console.log(isPalindrome(123));;


//without converting to string
var isPalindrome2 = function(x) {
    let reservedX = x;
    let reversed = 0;
    while(reservedX > 0){
        reversed = (reversed * 10) + (reservedX % 10);
        reservedX = Math.floor(reservedX / 10);
    }
    if(x === reversed){
        return true;
    }else{
        return false;
    }
};

console.log(isPalindrome2(121));
//1st way
function reverseString(str) {
    if (!str && str.length < 2 && typeof str !== 'String') {
        return "It's not a valid string";
    }
    let reverse = "";
    for (i = 0; i < str.length; i++) {
        let newString = str[i];
        reverse = newString + reverse;
    }
    return reverse;
}
const statement = "Hello, this is protik";
const result = reverseString(statement);
console.log(result);

//2nd way
function reverseString2(str) {
    //return str.split("").reverse().join("");  //one line code
    const splittedArr = str.split("");
    const reversed = splittedArr.reverse();
    return reversed.join("");
}
console.log(reverseString2("hello"));

//3rd way 
function reverseString3(str) {
    if (!str && str.length < 2 && typeof str !== 'String') {
        return "It's not a valid string";
    }
    const reversedArr = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        reversedArr.push(str[i]);
    }
    return reversedArr.join();
}

console.log(reverseString3("This is third approach!"));

//4th way
const reverseString4 = str => [...str].reverse().join("");
console.log(reverseString4("Fourth Way!"))
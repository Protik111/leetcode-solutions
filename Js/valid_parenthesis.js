const isValid = (paren) => {
    if(paren.length % 2 !== 0) return false;
    const parenPair = new Map([
        ['(' , ')'],
        ['{' , '}'],
        ['[' , ']'],
    ]);
    const stack = [];
    for(let i of paren){
        if(parenPair.has(i)){
            stack.push(parenPair.get(i));
        }else if(i !== stack.pop()){
            return false;
        }
    }
    return stack.length === 0;
}

console.log(isValid('{'));
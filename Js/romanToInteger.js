var romanToInt = function(s) {
    const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let convertedInteger = 0;
    s.split("").forEach((num, i) => {
        if(map[num] < map[s[i+1]]) convertedInteger -= map[num];
        else convertedInteger += map[num];
    })
    return convertedInteger;
};

console.log(romanToInt('IX'));
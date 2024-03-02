const fibonacci = function(num) {
    const arr = [0, 1]; 
    num = Number(num)
    if (num === 0 ) {
        return 0;
    } else if (num < 0 || isNaN(num)) {
        return "OOPS"
    } 
    for (let i = 1; i < num; i++) {
        arr.push((arr[arr.length - 2] + arr[arr.length - 1]))
    }
    return arr[arr.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;

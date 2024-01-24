const reverseString = function(string) {
    let reverse = [];
    let splitString = string.split("");
    for (let i = splitString.length - 1; i >= 0; i--) {
        reverse.push(splitString[i])
    }
    reverse = reverse.join("");
    return reverse
};

// Do not edit below this line
module.exports = reverseString;

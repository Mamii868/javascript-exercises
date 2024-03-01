const palindromes = function (string) {
const arr = string.toLowerCase().split("")
const filteredArr = arr.filter((item) => !item.match(/[^\w\s]+|\s/))
const reversedArr = filteredArr.toReversed()
if (filteredArr.toString() === reversedArr.toString()) {
    return true
} else {
    return false
}
};

// Do not edit below this line
module.exports = palindromes;

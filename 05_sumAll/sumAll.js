const sumAll = function(inum, fnum) {
    let sum = 0;
    if (inum < fnum) {
        for (let i = inum; i <= fnum; i++) {
            sum += i;
        }
    } else if (inum > fnum) {
        for (let i = inum; i >= fnum; i--) {
            sum += i;
        }
    } else{
        sum = "ERROR"
    }

    if (sum < 0 || !Number.isInteger(inum) || !Number.isInteger(fnum)) {
        sum = "ERROR"
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;

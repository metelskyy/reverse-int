module.exports = function reverse(n) {
    const newN = String(n).split("").reverse().join("");
    return parseInt(newN);
};

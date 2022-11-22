const numbers = [1, 2, 3, 4, 5];

console.log('The sum of squares is', calculateSumSquares(numbers));

function calculateSumSquares(arr) {
    const result = arr.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);

    return result;
};

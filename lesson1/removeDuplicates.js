const numbers = [1, 2, 3, 4, 5, 1, 3, 4, 7, 9, 6];

console.log('Array without duplicates', removeDuplicates(numbers));

function removeDuplicates(arr) {
    const result = arr.reduce((acc, cur) => !acc.includes(cur) ? [...acc, cur] : acc, []);

    return result;
};

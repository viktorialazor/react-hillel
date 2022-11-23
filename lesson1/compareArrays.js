const firstArray = [1, 2, 3];
const secondArray = [1, 2, 3];

console.log('Are the arrays equal?', compareArrays(firstArray, secondArray));

function compareArrays(firstArr, secondArr) {
    if (firstArr.length !== secondArr.length) {
        return false;
    }

    const result = firstArr.filter((item, index) => item !== secondArr[index]);

    return result.length ? false : true;
};

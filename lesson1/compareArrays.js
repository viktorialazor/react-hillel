const firstArray = [1, 2, 3];
const secondArray = [1, 2, 3];

console.log('Are the arrays equal?', compareArrays(firstArray, secondArray));

function compareArrays(firstArr, secondArr) {
    if (firstArr.length !== secondArr.length) {
        return false;
    }

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            return false;
        }
    }

    return true;
};
